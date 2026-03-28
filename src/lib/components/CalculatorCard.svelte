<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		description: string;
		children: Snippet;
	}

	let { title, description, children }: Props = $props();
</script>

<div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
	<h2 class="text-xl font-semibold text-gray-800 mb-1">{title}</h2>
	<p class="text-sm text-gray-500 mb-6">{description}</p>
	{@render children()}
</div>
