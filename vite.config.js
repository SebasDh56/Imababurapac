import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        institucional: 'institucional.html',
        rutas: 'rutas.html',
        servicios: 'servicios.html',
        consulta: 'consulta.html',
        contacto: 'contacto.html',
        terminales: 'terminales.html'
      }
    }
  }
});
