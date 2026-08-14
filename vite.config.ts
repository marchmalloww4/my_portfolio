import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project sites are served from
// https://<user>.github.io/<repo-name>/, so base must match the real repo.
export default defineConfig({
  plugins: [react()],
  base: '/my_portfolio/',
})
