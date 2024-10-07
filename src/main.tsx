import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App 
      config={{
        botId: 1,
        clientId: 1,
        botName: "Bot",
        bgColor: "#f0f0f0",
        primaryColor: "#000",
        isAudioEnabled: true,
        isFilesEnabled: true,
        firstMessage: "Hello, ask me anything!",
      }}
    />
  </StrictMode>,
)
