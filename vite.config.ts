import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** GitHub Pages 项目站路径；本地开发不设环境变量即为 `/` */
const base = process.env.VITE_BASE_PATH?.replace(/\/?$/, "/") ?? "/";

export default defineConfig({
  plugins: [react()],
  base,
});
