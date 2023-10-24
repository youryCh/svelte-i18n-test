import App from './App.svelte';
import './i18n/i18n';

const app = new App({
	target: document.body,
	props: {
		name: 'Svelte'
	}
});

export default app;