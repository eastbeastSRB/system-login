import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // proxy: {
    //   '/users/v1': {
    //     target: 'http://localhost:5000/',
    //     changeOrigin: true,
    //   },
    //   '/users/v1/auth': 'http://localhost:5000/',
    // }
    proxy: {
      "/users/v1": "http://localhost:5000/",
    }
  },
  plugins: [react()],
})
