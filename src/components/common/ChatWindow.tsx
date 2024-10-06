import React, { RefObject } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { IoClose } from "react-icons/io5";
import { MessageList } from "./MessageList";
import { MessageInput } from "./MessageInput";
import { Message } from "@/types/Message";
import { Config } from "@/types/Config";

interface ChatWindowProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  messages: Message[];
  loading: boolean;
  messagesEndRef: RefObject<HTMLDivElement>;
  config: Config;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
  handleClickFileUpload: () => void;
  fileInputRef: RefObject<HTMLInputElement>;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  setIsOpen,
  messages,
  loading,
  messagesEndRef,
  config,
  message,
  setMessage,
  handleSubmit,
  handleClickFileUpload,
  fileInputRef,
}) => {
  return (
    <Card className="fixed bottom-0 right-0 p-0 w-96">
      <CardHeader className="flex justify-between items-center p-2 pl-4 py-4">
        <img
          src="/logo-no-background.svg"
          alt="Orvana Group"
          width={120}
          height={100}
        />
        <Button
          variant="outline"
          className="hover:bg-transparent border-transparent hover:border-primary"
          onClick={() => setIsOpen(false)}
        >
          <IoClose size={20} />
        </Button>
      </CardHeader>
      <CardContent className="px-6 py-0">
        <MessageList
          messages={messages}
          loading={loading}
          messagesEndRef={messagesEndRef}
        />
      </CardContent>
      <CardFooter className="flex flex-col items-center pb-0 pt-2 px-6">
        <MessageInput
          config={config}
          message={message}
          setMessage={setMessage}
          handleSubmit={handleSubmit}
          handleClickFileUpload={handleClickFileUpload}
          fileInputRef={fileInputRef}
        />
        <p className="py-2 text-muted-foreground text-2xs">
          Copyright @{new Date().getFullYear()} by{" "}
          <a href="https://github.com/Orvana-Group">
            <b>Orvana Group</b>
          </a>{" "}
          - All rights reserved
        </p>
      </CardFooter>
    </Card>
  );
};
