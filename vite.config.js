// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // IMPORTANT: this must match your repo name and include leading & trailing slashes
  base: "/moazzam-portfolio/",
  plugins: [react()]
});