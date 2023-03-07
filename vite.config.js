import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	server: {
		cors: false,
		hmr: false
	}
};

export default config;
