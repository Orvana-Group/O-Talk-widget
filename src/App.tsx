import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "./components/ui/popover";
import { Button } from "./components/ui/button";
import { ChatWindow } from "./components/common/ChatWindow";
import { Config } from "./types/Config";
import { Message } from "./types/Message";

interface AppProps {
  config: Config;
}

const App: React.FC<AppProps> = ({ config }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      message: config.firstMessage || "Hello, ask me anything!",
      sender: "Bot",
      hour: new Date().toLocaleTimeString("pl-PL", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageIdRef = useRef<number>(messages.length);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async () => {
    if (message.trim() === "") return;

    addMessage(message, "Client");
    setMessage(""); // Clear the input field after sending the message
    setLoading(true);

    try {
      const botReply = await getBotResponse(message);
      addMessage(botReply, "Bot");
    } catch (error) {
      console.error("Error getting bot response:", error);
    } finally {
      setLoading(false);
    }
  };

  const addMessage = (text: string, sender: "Client" | "Bot") => {
    messageIdRef.current += 1;
    const newMessage: Message = {
      id: messageIdRef.current,
      message: text,
      sender,
      hour: new Date().toLocaleTimeString("pl-PL", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const getBotResponse = async (prompt: string): Promise<string> => {
    const response = await fetch("http://localhost:8000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.response;
  };

  const handleClickFileUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="fixed right-5 bottom-5">
      <Popover open={isOpen}>
        <PopoverTrigger>
          <Button
            variant="default"
            className={isOpen ? "hidden" : "block"}
            onClick={() => setIsOpen(!isOpen)}
          >
            Open
          </Button>
        </PopoverTrigger>
        <PopoverContent asChild>
          <ChatWindow
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            messages={messages}
            loading={loading}
            messagesEndRef={messagesEndRef}
            config={config}
            message={message}
            setMessage={setMessage}
            handleSubmit={handleSubmit}
            handleClickFileUpload={handleClickFileUpload}
            fileInputRef={fileInputRef}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default App;
