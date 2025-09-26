import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { viteAliases } from './aliases'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']]
      }
    })
  ],
  resolve: {
    alias: {
      ...viteAliases
    }
  }
})
