import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom plugin for hidden endpoint
function mockApiPlugin() {
  return {
    name: 'mock-api',
    configureServer(server: { middlewares: { use: (arg0: string, arg1: (req: any, res: any) => void) => void } }) {
      return () => {
        server.middlewares.use('/api/hidden-endpoint', (_req, res) => {
          res.setHeader('Content-Type', 'application/json')
          res.setHeader('X-Hidden-Content', 'genius{hidden_endpoint_discovered}')
          res.statusCode = 200
          res.end(JSON.stringify({
            success: true,
            message: 'You found the hidden endpoint!',
            secret: 'genius{hidden_api_endpoint}',
            hint: 'Check response headers too!'
          }))
        })
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mockApiPlugin()],
})
