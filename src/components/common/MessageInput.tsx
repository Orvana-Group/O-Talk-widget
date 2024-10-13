import React, { RefObject } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { GrAttachment } from 'react-icons/gr'
import { IoIosSend } from "react-icons/io";
import { Config } from '@/types/Config'
import { MdClear } from "react-icons/md";

interface MessageInputProps {
    config: Config
    message: string
    setMessage: React.Dispatch<React.SetStateAction<string>>
    handleSubmit: () => void
    handleClearHistory: () => void
    handleClickFileUpload: () => void
    fileInputRef: RefObject<HTMLInputElement>
}

export const MessageInput: React.FC<MessageInputProps> = ({ config, message, setMessage, handleSubmit, handleClearHistory, handleClickFileUpload, fileInputRef }) => {
    return (
        <div className="flex gap-2 w-full">
            {config.isFilesEnabled && (
                <>
                    <Input type="file" className="hidden" ref={fileInputRef} />
                    <Button variant="outline" className="w-20" size="icon" onClick={handleClickFileUpload}>
                        <GrAttachment />
                    </Button>
                </>
            )}
            <Input
                placeholder="Type a message..."
                className="w-full"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSubmit()
                    }
                }}
            />
            <Button onClick={handleSubmit} variant="default" size='icon' className="w-20 hover:bg-transparent border border-primary">
                <IoIosSend />
            </Button>
            <Button onClick={handleClearHistory} variant="default" size='icon' className="w-20 hover:bg-transparent border border-primary">
                <MdClear />
            </Button>
        </div>
    )
}
