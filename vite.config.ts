import path from "path"
import tailwindcss from "@tailwindcss/vite"

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isBuild = command === 'build';
  
  return {
    plugins: [
      react({
        // Use automatic JSX runtime
        // The plugin automatically uses production JSX (jsx) when NODE_ENV=production
        // and development JSX (jsxDEV) when NODE_ENV=development
        jsxRuntime: 'automatic',
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
      external: [
        'react', 
        'react-dom', 
        'react-dom/server', 
        'react-router-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
      ],
      // Don't resolve these - let Node.js handle them
      noExternal: [],
    },
    define: {
      // Force production mode for SSR builds
      ...(isBuild && {
        'process.env.NODE_ENV': JSON.stringify('production'),
        '__DEV__': 'false',
      }),
    },
  };
})
