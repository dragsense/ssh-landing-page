import path from "path"
import tailwindcss from "@tailwindcss/vite"

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production' || process.env.NODE_ENV === 'production';
  
  return {
    plugins: [
      react({
        // Use automatic JSX runtime
        jsxRuntime: 'automatic',
        // In production, use production JSX transform (jsx instead of jsxDEV)
        ...(isProduction && {
          jsxImportSource: 'react',
        }),
      }),
      tailwindcss()
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 5175, // 👈 change this to your desired port
    },
    ssr: {
      // Externalize React and ReactDOM for SSR - let Node.js use the actual installed packages
      // This ensures proper JSX runtime (jsx/jsxDEV) is available
      external: ['react', 'react-dom', 'react-dom/server', 'react-router-dom'],
    },
  };
})
