import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: './',
  server: {
    host: "0.0.0.0",  // Changed from "::" to "0.0.0.0" to bind to all interfaces
    port: 8080,
    hmr: {
      // For Docker container, make sure HMR works
      clientPort: 8080,
      host: "0.0.0.0",
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      // Externalize the service worker files so they're copied as-is
      external: [
        /^\/serviceWorkerRegistration\.js$/,
        /^\/sw\.js$/
      ],
    },
    // Configure copyPublicDir to ensure all public files are copied to dist
    copyPublicDir: true,
  },
  // Add a hook to manually copy service worker files during build
  optimizeDeps: {
    exclude: [
      'serviceWorkerRegistration.js',
      'sw.js'
    ]
  }
}));
