import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {

  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        "/api": {
         import.meta.env.VITE_API_URL,
        },
      },
    },
  };
});
