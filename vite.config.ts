import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  define: {
    VITE_TMDB_API_KEY: JSON.stringify(process.env.VITE_TMDB_API_KEY || ''),
  },
})
