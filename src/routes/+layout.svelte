<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Percentage Calculator</title>
	<meta name="description" content="A simple, fast percentage calculator. Calculate percentage of a number, what percent one number is of another, and percentage change between two values." />
	<meta name="author" content="Daniel Salvado" />
	<meta property="og:title" content="Percentage Calculator" />
	<meta property="og:description" content="A simple, fast percentage calculator. Calculate percentage of a number, what percent one number is of another, and percentage change between two values." />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Percentage Calculator" />
	<meta name="twitter:description" content="A simple, fast percentage calculator. Calculate percentage of a number, what percent one number is of another, and percentage change between two values." />
</svelte:head>
{@render children()}
