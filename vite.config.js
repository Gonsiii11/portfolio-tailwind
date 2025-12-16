import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss()],
	// Base path for GitHub Pages deployment
	// IMPORTANT: Replace 'portafolio-tailwind' with your actual repository name
	base: process.env.NODE_ENV === 'production' ? '/portfolio-tailwind/' : '/',  // poner portfolio-tailwind
	build: {
		outDir: 'dist',
		assetsDir: 'assets',
	},
});