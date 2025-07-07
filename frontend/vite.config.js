import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {

  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        "/api/": "https://blog-app-backend-6a8t.onrender.com",
    },
  };
});
