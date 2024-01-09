import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config();


// Check if result of the dotenv.config();
console.log('Loaded environment variables:', dotenv.config().parsed);
export default defineConfig({
  define: {
    'import.meta.env.VITE_API_KEY' : JSON.stringify(process.env.VITE_API_KEY)
  }
});
