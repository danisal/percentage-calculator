<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { i18n } from '$lib/i18n';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>{i18n.t.app.title}</title>
	<meta name="description" content={i18n.t.app.description} />
	<meta name="author" content="Daniel Salvado" />
	<meta property="og:title" content={i18n.t.app.title} />
	<meta property="og:description" content={i18n.t.app.description} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={i18n.t.app.title} />
	<meta name="twitter:description" content={i18n.t.app.description} />
</svelte:head>
{@render children()}
