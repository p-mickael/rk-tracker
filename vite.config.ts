import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",
            devOptions: {
              enabled: true
            },
            manifest: {
                icons: [
                    {
                        src: "/icons/768.png",
                        sizes: "768x768",
                        type: "image/png"
                    },
                    {
                        src: "/icons/192.png",
                        sizes: "192x192",
                        type: "image/png"
                    }
                ],
            }
        })
    ],
})
