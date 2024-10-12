import React from 'react'
import { Card, CardContent, CardFooter } from '../ui/card'
import { Message } from '@/types/Message'

interface MessageItemProps {
    message: Message
}

export const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
    return (
        <Card className={`w-3/4 rounded-lg ${message.sender === 'user' ? 'ml-auto rounded-br-none' : 'mr-auto rounded-bl-none'} mb-2`}>
            <CardContent className="p-2 pl-4">{message.message_text}</CardContent>
            <CardFooter className={`flex items-end p-2 pt-0 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <p className="text-muted-foreground text-xs">{message.hour}</p>
            </CardFooter>
        </Card>
    )
}
