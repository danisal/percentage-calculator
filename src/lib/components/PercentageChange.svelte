<script lang="ts">
	import { percentageChange, formatResult, parseInputString } from '$lib';

	let fromInput = $state('');
	let toInput = $state('');

	let result = $derived.by(() => {
		const from = parseInputString(fromInput);
		const to = parseInputString(toInput);
		return percentageChange(from, to);
	});
</script>

<div>
	<div class="bg-stone-200 dark:bg-zinc-900 rounded-xl px-4 py-3 mb-5 font-mono text-sm text-zinc-600 dark:text-zinc-300">
		change = ((to − from) / |from|) × 100
	</div>

	<label class="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5" for="from-input">
		From
	</label>
	<input
		id="from-input"
		type="text"
		inputmode="decimal"
		bind:value={fromInput}
		class="w-full bg-stone-200 dark:bg-zinc-700 text-zinc-900 dark:text-white text-lg rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
		placeholder="e.g. 100"
	/>

	<div class="flex items-center gap-3 my-3">
		<span class="bg-stone-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 text-xs font-bold px-2.5 py-1 rounded-lg">→</span>
		<span class="text-zinc-500 text-sm">to</span>
	</div>

	<label class="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5" for="to-input">
		To
	</label>
	<input
		id="to-input"
		type="text"
		inputmode="decimal"
		bind:value={toInput}
		class="w-full bg-stone-200 dark:bg-zinc-700 text-zinc-900 dark:text-white text-lg rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
		placeholder="e.g. 150"
	/>

	<div class="mt-5 bg-stone-200 dark:bg-zinc-900 rounded-xl px-5 py-4">
		<p class="text-xs font-semibold tracking-widest text-zinc-500 mb-2">RESULT</p>
		{#if result === 'division_by_zero'}
			<p class="text-4xl font-bold text-amber-500 dark:text-amber-400">Cannot divide by zero</p>
		{:else if result === null}
			<p class="text-4xl font-bold text-zinc-900 dark:text-white">—</p>
		{:else if result > 0}
			<p class="text-4xl font-bold text-emerald-600 dark:text-emerald-400">+{formatResult(result)}%</p>
		{:else if result < 0}
			<p class="text-4xl font-bold text-red-600 dark:text-red-400">{formatResult(result)}%</p>
		{:else}
			<p class="text-4xl font-bold text-zinc-900 dark:text-white">0%</p>
		{/if}
		<div class="border-t border-stone-300 dark:border-zinc-700 mt-3 pt-3">
			<p class="text-sm text-zinc-500 dark:text-zinc-400">
				{#if result !== null && result !== 'division_by_zero'}
					From {fromInput.trim() || '…'} to {toInput.trim() || '…'}: {result > 0 ? '+' : ''}{formatResult(result)}% change
				{:else}
					—
				{/if}
			</p>
		</div>
	</div>
</div>
