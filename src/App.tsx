import React, { useState, useRef, useEffect } from 'react'
import './App.css'
import { Popover, PopoverTrigger, PopoverContent } from './components/ui/popover'
import { Button } from './components/ui/button'
import { ChatWindow } from './components/common/ChatWindow'
import { Config } from './types/Config'
import { Message } from './types/Message'

interface AppProps {
    config: Config
}

const App: React.FC<AppProps> = ({ config }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            content: config.firstMessage || 'Hello, ask me anything!',
            role: 'assistant',
            hour: new Date().toLocaleTimeString('pl-PL', {
                hour: '2-digit',
                minute: '2-digit',
            }),
        },
    ])

    const [historyIsLoading, setHistoryIsLoading] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const messageIdRef = useRef<number>(messages.length)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    const handleSubmit = async () => {
        if (message.trim() === '') return

        addMessage(message, 'user')
        setMessage('') // Clear the input field after sending the message
        setLoading(true)

        try {
            const botReply = await getBotResponse(message)
            addMessage(botReply, 'assistant')
        } catch {
            addMessage("I'm sorry, I couldn't process your message.", 'assistant')
        } finally {
            setLoading(false)
        }
    }

    const handleClearHistory = async () => {
        console.log('Clearing chat history...')
        try {
            setHistoryIsLoading(true)
            const response = await fetch('http://localhost:3000/chat-history', {
                method: 'DELETE',
                credentials: 'include',
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            setMessages([
                {
                    id: 1,
                    content: config.firstMessage || 'Hello, ask me anything!',
                    role: 'assistant',
                    hour: new Date().toLocaleTimeString('pl-PL', {
                        hour: '2-digit',
                        minute: '2-digit',
                    }),
                },
            ])
        } catch {
            addMessage("I'm sorry, I couldn't clear the chat history.", 'assistant')
        } finally {
            setHistoryIsLoading(false)
        }
    }

    const addMessage = (text: string, role: 'user' | 'assistant') => {
        messageIdRef.current += 1
        const newMessage: Message = {
            id: messageIdRef.current,
            content: text,
            role,
            hour: new Date().toLocaleTimeString('pl-PL', {
                hour: '2-digit',
                minute: '2-digit',
            }),
        }
        setMessages((prev) => [...prev, newMessage])
    }

    const getBotResponse = async (prompt: string): Promise<string> => {
        const response = await fetch('http://localhost:3000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
            credentials: 'include',
        })

        if (!response.ok) {
            throw new Error('Network response was not ok')
        }

        const data = await response.json()
        return data.message
    }

    const handleOpenChat = async () => {
        try {
            setHistoryIsLoading(true)
            setIsOpen(true)
            const history = await fetch('http://localhost:3000/chat-history', {
                credentials: 'include',
            })
            const data = await history.json()
            // map timestamp to hour
            data.forEach((message: { timestamp: string; hour: string }) => {
                message.hour = new Date(message.timestamp).toLocaleTimeString('pl-PL', {
                    hour: '2-digit',
                    minute: '2-digit',
                })
            })
            console.log(data)
            setMessages(data)
        } catch {
            setMessages([
                {
                    id: 1,
                    content: 'Hello, ask me anything!',
                    role: 'assistant',
                    hour: new Date().toLocaleTimeString('pl-PL', {
                        hour: '2-digit',
                        minute: '2-digit',
                    }),
                },
            ])
        } finally {
            setHistoryIsLoading(false)
        }
    }

    const handleClickFileUpload = () => {
        fileInputRef.current?.click()
    }

    return (
        <div className="fixed right-5 bottom-5">
            <Popover open={isOpen}>
                <PopoverTrigger>
                    <Button variant="default" className={isOpen ? 'hidden' : 'block'} onClick={() => handleOpenChat()}>
                        Open
                    </Button>
                </PopoverTrigger>
                <PopoverContent asChild>
                    <ChatWindow
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        messages={messages}
                        loading={loading}
                        chatHistoryIsLoading={historyIsLoading}
                        messagesEndRef={messagesEndRef}
                        config={config}
                        message={message}
                        setMessage={setMessage}
                        handleSubmit={handleSubmit}
                        handleClearHistory={handleClearHistory}
                        handleClickFileUpload={handleClickFileUpload}
                        fileInputRef={fileInputRef}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default App
