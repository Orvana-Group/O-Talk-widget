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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const initialMessages: Message[] = [
    {
      id: 1,
      message: config.firstMessage || "Hello, how are you?",
      sender: "Bot",
      hour: new Date().toLocaleTimeString("pl-PL", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
    // ... other initial messages if any
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSubmit = async () => {
    await handleSendMessage();
    setLoading(true);
    setTimeout(() => {
      simulateBotResponse();
      setLoading(false);
    }, 3000);
  };

  const handleSendMessage = async () => {
    if (message.trim() === "") return;
    const newMessage: Message = {
      id: messages.length + 1,
      message,
      sender: "Client",
      hour: new Date().toLocaleTimeString("pl-PL", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, newMessage]);
    setMessage("");
  };

  const simulateBotResponse = () => {
    const botResponse: Message = {
      id: messages.length + 1,
      message: "Yeah, sure! I can help you with that.",
      sender: "Bot",
      hour: new Date().toLocaleTimeString("pl-PL", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, botResponse]);
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
