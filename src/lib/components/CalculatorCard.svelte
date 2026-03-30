<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		description: string;
		children: Snippet;
	}

	let { title, description, children }: Props = $props();
</script>

<div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
	<h2 class="mb-1 text-xl font-semibold text-gray-800">{title}</h2>
	<p class="mb-6 text-sm text-gray-500">{description}</p>
	{@render children()}
</div>
