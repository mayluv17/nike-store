import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/<nike-store>/",
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Expose the server to all network interfaces
  },
});
