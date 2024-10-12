export interface Message {
    id: number
    message: string
    sender: 'Client' | 'Bot'
    hour: string
}
