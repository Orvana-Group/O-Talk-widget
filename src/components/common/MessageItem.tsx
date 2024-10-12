import React from 'react'
import { Card, CardContent, CardFooter } from '../ui/card'
import { Message } from '@/types/Message'

interface MessageItemProps {
    message: Message
}

export const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
    return (
        <Card className={`w-3/4 rounded-lg ${message.sender === 'Client' ? 'ml-auto rounded-br-none' : 'mr-auto rounded-bl-none'} mb-2`}>
            <CardContent className="p-2 pl-4">{message.message}</CardContent>
            <CardFooter className={`flex items-end p-2 pt-0 ${message.sender === 'Client' ? 'justify-end' : 'justify-start'}`}>
                <p className="text-muted-foreground text-xs">{message.hour}</p>
            </CardFooter>
        </Card>
    )
}
