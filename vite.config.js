import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //  server:{
  //   host:"192.168.1.42",
  //   port : "3001"
  //  },
  plugins: [react()],
})
