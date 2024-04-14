import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "../server/dist/client",
        emptyOutDir: true,
    },
    server: {
        strictPort: true,
        host: true,
        port: 3000,
        watch: {
            usePolling: true,
        },
    },
});
