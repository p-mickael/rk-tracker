import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ThemeProvider} from "@/components/theme-provider.tsx";
import "@fontsource/kaushan-script"
import {TokenProvider} from "@/contexts/TokenContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider defaultTheme={"dark"} storageKey={"vite-ui-theme"}>
            <TokenProvider>
                <App/>
            </TokenProvider>
        </ThemeProvider>
    </React.StrictMode>,
)
