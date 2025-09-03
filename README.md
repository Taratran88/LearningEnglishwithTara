# LearningEnglishwithTara
npm install gh-pages --save-dev
"homepage": "https://Taratran88.github.io/LearningEnglishwithTara",
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/LearningEnglishwithTara/', // IMPORTANT
});
