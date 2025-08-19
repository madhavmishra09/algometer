import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import ViteFonts from 'vite-plugin-fonts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),ViteFonts(
    {
      google: {
        families: [
          {
            name:'JetBrains Mono',
            styles: 'wght@400:700'
          }
        ]
      }
    }
  )]
})
