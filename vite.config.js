import { defineConfig } from 'vite'

export default defineConfig({
    base: '/awesomolio/',
    build: {
		minify: 'terser'
	},
})