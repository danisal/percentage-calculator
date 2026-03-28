<script lang="ts">
	import { percentageBetween, formatResult, parseInputString } from '$lib';

	let partInput = $state('');
	let wholeInput = $state('');

	let result = $derived.by(() => {
		const part = parseInputString(partInput);
		const whole = parseInputString(wholeInput);
		return percentageBetween(part, whole);
	});
</script>

<div>
	<div class="bg-stone-200 dark:bg-zinc-900 rounded-xl px-4 py-3 mb-5 font-mono text-sm text-zinc-600 dark:text-zinc-300">
		percentage = (part / whole) × 100
	</div>

	<label class="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5" for="part-input">
		Part
	</label>
	<input
		id="part-input"
		type="text"
		inputmode="decimal"
		bind:value={partInput}
		class="w-full bg-stone-200 dark:bg-zinc-700 text-zinc-900 dark:text-white text-lg rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
		placeholder="e.g. 50"
	/>

	<div class="flex items-center gap-3 my-3">
		<span class="bg-stone-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 text-xs font-bold px-2.5 py-1 rounded-lg">/</span>
		<span class="text-zinc-500 text-sm">divided by</span>
	</div>

	<label class="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5" for="whole-input">
		Whole
	</label>
	<input
		id="whole-input"
		type="text"
		inputmode="decimal"
		bind:value={wholeInput}
		class="w-full bg-stone-200 dark:bg-zinc-700 text-zinc-900 dark:text-white text-lg rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
		placeholder="e.g. 200"
	/>

	<div class="mt-5 bg-stone-200 dark:bg-zinc-900 rounded-xl px-5 py-4">
		<p class="text-xs font-semibold tracking-widest text-zinc-500 mb-2">RESULT</p>
		{#if result === 'division_by_zero'}
			<p class="text-4xl font-bold text-amber-500 dark:text-amber-400">Cannot divide by zero</p>
		{:else}
			<p class="text-4xl font-bold text-zinc-900 dark:text-white">
				{result !== null ? `${formatResult(result)}%` : '—'}
			</p>
		{/if}
		<div class="border-t border-stone-300 dark:border-zinc-700 mt-3 pt-3">
			<p class="text-sm text-zinc-500 dark:text-zinc-400">
				{#if result !== null && result !== 'division_by_zero'}
					{partInput.trim() || '…'} is {formatResult(result)}% of {wholeInput.trim() || '…'}
				{:else}
					—
				{/if}
			</p>
		</div>
	</div>
</div>
