<script lang="ts">
	import { percentageOfNumber, formatResult, parseInputString } from '$lib';

	let percentageInput = $state('');
	let numberInput = $state('');

	let result = $derived.by(() => {
		const percentage = parseInputString(percentageInput);
		const number = parseInputString(numberInput);
		return percentageOfNumber(percentage, number);
	});
</script>

<div>
	<div class="bg-stone-200 dark:bg-zinc-900 rounded-xl px-4 py-3 mb-5 font-mono text-sm text-zinc-600 dark:text-zinc-300">
		result = (percentage / 100) × number
	</div>

	<label class="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5" for="percentage-input">
		Percentage
	</label>
	<input
		id="percentage-input"
		type="text"
		inputmode="decimal"
		bind:value={percentageInput}
		class="w-full bg-stone-200 dark:bg-zinc-700 text-zinc-900 dark:text-white text-lg rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
		placeholder="e.g. 20"
	/>

	<div class="flex items-center gap-3 my-3">
		<span class="bg-stone-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 text-xs font-bold px-2.5 py-1 rounded-lg">%</span>
		<span class="text-zinc-500 text-sm">of</span>
	</div>

	<label class="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5" for="number-input">
		Number
	</label>
	<input
		id="number-input"
		type="text"
		inputmode="decimal"
		bind:value={numberInput}
		class="w-full bg-stone-200 dark:bg-zinc-700 text-zinc-900 dark:text-white text-lg rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
		placeholder="e.g. 250"
	/>

	<div class="mt-5 bg-stone-200 dark:bg-zinc-900 rounded-xl px-5 py-4">
		<p class="text-xs font-semibold tracking-widest text-zinc-500 mb-2">RESULT</p>
		<p class="text-4xl font-bold text-zinc-900 dark:text-white">
			{result !== null ? formatResult(result) : '—'}
		</p>
		<div class="border-t border-stone-300 dark:border-zinc-700 mt-3 pt-3">
			<p class="text-sm text-zinc-500 dark:text-zinc-400">
				{#if result !== null}
					{percentageInput.trim() || '…'}% of {numberInput.trim() || '…'} = {formatResult(result)}
				{:else}
					—
				{/if}
			</p>
		</div>
	</div>
</div>
