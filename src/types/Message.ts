export interface Message {
    id: number
    message_text: string
    sender: 'user' | 'assistant'
    hour: string
}
