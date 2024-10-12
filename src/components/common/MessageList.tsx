import React, { RefObject } from 'react'
import { ScrollArea } from '../ui/scroll-area'
import { Message } from '@/types/Message'
import { Card, CardContent } from '../ui/card'
import { MessageItem } from './MessageItem'

interface MessageListProps {
    messages: Message[]
    loading: boolean
    messagesEndRef: RefObject<HTMLDivElement>
}

export const MessageList: React.FC<MessageListProps> = ({ messages, loading, messagesEndRef }) => {
    return (
        <ScrollArea className="flex flex-col h-96 pr-3">
            {messages.map((msg) => (
                <MessageItem key={msg.id} message={msg} />
            ))}
            {loading && (
                <Card className="w-20 rounded-lg mr-auto rounded-bl-none rounded-tl-2xl rounded-br-2xl mb-2">
                    <CardContent className="p-4 pl-8">
                        <div className="loader"></div>
                    </CardContent>
                </Card>
            )}
            <div ref={messagesEndRef} />
        </ScrollArea>
    )
}
