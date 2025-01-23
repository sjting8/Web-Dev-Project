/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		plugins: [
			react(),
			checker({
				typescript: true,
				eslint: {
					lintCommand: 'eslint "./src/**/*.{ts,tsx}"', // for example, lint .ts & .tsx
				},
			}),
		],
		server: {
			proxy: {
				'/api': {
					target: env.API_TARGET,
					changeOrigin: true,
				},
			},
		},
		resolve: {
			alias: {
				actions: path.resolve(__dirname, './src/actions'),
				admin: path.resolve(__dirname, './src/components/admin'),
				components: path.resolve(__dirname, './src/components'),
				containers: path.resolve(__dirname, './src/containers'),
				pages: path.resolve(__dirname, './src/pages'),
				reducers: path.resolve(__dirname, './src/reducers'),
				style: path.resolve(__dirname, './src/style'),
				utils: path.resolve(__dirname, './src/utils'),
			},
		},
		build: {
			rollupOptions: {
				plugins: [visualizer()],
				output: {
					assetFileNames: '[hash].[ext]',
					chunkFileNames: 'assets/[hash].js',
				},
			},
		},
	};
});
