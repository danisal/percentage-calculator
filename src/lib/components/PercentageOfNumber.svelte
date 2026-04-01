<script lang="ts">
	import { percentageOfNumber, formatResult, parseInputString } from '$lib';
	import { i18n } from '$lib/i18n';

	let percentageInput = $state('');
	let numberInput = $state('');

	let result = $derived.by(() => {
		const percentage = parseInputString(percentageInput);
		const number = parseInputString(numberInput);
		return percentageOfNumber(percentage, number);
	});
</script>

<div>
	<div class="mb-5 rounded-xl bg-stone-200 px-4 py-3 dark:bg-zinc-900">
		<code class="font-mono text-sm text-zinc-600 dark:text-zinc-300">{i18n.t.percentOfNumber.formula}</code>
	</div>

	<label
		class="mb-1.5 block text-xs font-medium text-zinc-500 dark:text-zinc-400"
		for="percentage-input"
	>
		{i18n.t.percentOfNumber.percentageLabel}
	</label>
	<input
		id="percentage-input"
		type="text"
		inputmode="decimal"
		bind:value={percentageInput}
		class="w-full rounded-xl bg-stone-200 px-4 py-3.5 text-lg text-zinc-900 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-400 dark:bg-zinc-700 dark:text-white dark:placeholder:text-zinc-500 dark:focus:ring-zinc-500"
		placeholder={i18n.t.percentOfNumber.percentagePlaceholder}
	/>

	<div class="my-3 flex items-center gap-3">
		<span
			aria-hidden="true"
			class="rounded-lg bg-stone-200 px-2.5 py-1 text-xs font-bold text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300"
			>%</span
		>
		<span class="text-sm text-zinc-500">{i18n.t.percentOfNumber.ofConnector}</span>
	</div>

	<label
		class="mb-1.5 block text-xs font-medium text-zinc-500 dark:text-zinc-400"
		for="number-input"
	>
		{i18n.t.percentOfNumber.numberLabel}
	</label>
	<input
		id="number-input"
		type="text"
		inputmode="decimal"
		bind:value={numberInput}
		class="w-full rounded-xl bg-stone-200 px-4 py-3.5 text-lg text-zinc-900 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-400 dark:bg-zinc-700 dark:text-white dark:placeholder:text-zinc-500 dark:focus:ring-zinc-500"
		placeholder={i18n.t.percentOfNumber.numberPlaceholder}
	/>

	<div class="mt-5 rounded-xl bg-stone-200 px-5 py-4 dark:bg-zinc-900">
		<p class="mb-2 text-xs font-semibold tracking-widest text-zinc-600 dark:text-zinc-400">{i18n.t.result}</p>
		<p class="text-4xl font-bold text-zinc-900 dark:text-white">
			{result !== null ? formatResult(result) : '—'}
		</p>
		<div class="mt-3 border-t border-stone-300 pt-3 dark:border-zinc-700">
			<p class="text-sm text-zinc-500 dark:text-zinc-400">
				{#if result !== null}
					{percentageInput.trim() || '…'}% {i18n.t.percentOfNumber.summaryOf}
					{numberInput.trim() || '…'} = {formatResult(result)}
				{:else}
					—
				{/if}
			</p>
		</div>
	</div>
</div>
