<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>{i18n.t.app.title}</title>
	<meta name="description" content={i18n.t.app.description} />
	<meta name="author" content="Daniel Salvado" />
	<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#09090b" />
	<meta name="theme-color" media="(prefers-color-scheme: light)" content="#f5f5f4" />
	<meta property="og:title" content={i18n.t.app.title} />
	<meta property="og:description" content={i18n.t.app.description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:image" content="{page.url.origin}/og-image.svg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={i18n.t.app.title} />
	<meta name="twitter:description" content={i18n.t.app.description} />
	<meta name="twitter:image" content="{page.url.origin}/og-image.svg" />
</svelte:head>
{@render children()}
