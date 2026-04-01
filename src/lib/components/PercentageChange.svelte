<script lang="ts">
	import { percentageChange, formatResult, parseInputString } from '$lib';
	import { i18n } from '$lib/i18n';

	let fromInput = $state('');
	let toInput = $state('');

	let result = $derived.by(() => {
		const from = parseInputString(fromInput);
		const to = parseInputString(toInput);
		return percentageChange(from, to);
	});
</script>

<div>
	<div class="mb-5 rounded-xl bg-stone-200 px-4 py-3 dark:bg-zinc-900">
		<code class="font-mono text-sm text-zinc-600 dark:text-zinc-300">{i18n.t.percentChange.formula}</code>
	</div>

	<label class="mb-1.5 block text-xs font-medium text-zinc-500 dark:text-zinc-400" for="from-input">
		{i18n.t.percentChange.fromLabel}
	</label>
	<input
		id="from-input"
		type="text"
		inputmode="decimal"
		bind:value={fromInput}
		class="w-full rounded-xl bg-stone-200 px-4 py-3.5 text-lg text-zinc-900 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-400 dark:bg-zinc-700 dark:text-white dark:placeholder:text-zinc-500 dark:focus:ring-zinc-500"
		placeholder={i18n.t.percentChange.fromPlaceholder}
	/>

	<div class="my-3 flex items-center gap-3">
		<span
			aria-hidden="true"
			class="rounded-lg bg-stone-200 px-2.5 py-1 text-xs font-bold text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300"
			>→</span
		>
		<span class="text-sm text-zinc-500">{i18n.t.percentChange.toConnector}</span>
	</div>

	<label class="mb-1.5 block text-xs font-medium text-zinc-500 dark:text-zinc-400" for="to-input">
		{i18n.t.percentChange.toLabel}
	</label>
	<input
		id="to-input"
		type="text"
		inputmode="decimal"
		bind:value={toInput}
		class="w-full rounded-xl bg-stone-200 px-4 py-3.5 text-lg text-zinc-900 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-400 dark:bg-zinc-700 dark:text-white dark:placeholder:text-zinc-500 dark:focus:ring-zinc-500"
		placeholder={i18n.t.percentChange.toPlaceholder}
	/>

	<div class="mt-5 rounded-xl bg-stone-200 px-5 py-4 dark:bg-zinc-900">
		<p class="mb-2 text-xs font-semibold tracking-widest text-zinc-600 dark:text-zinc-400">{i18n.t.result}</p>
		{#if result === 'division_by_zero'}
			<p class="text-4xl font-bold text-amber-500 dark:text-amber-400">{i18n.t.errors.divByZero}</p>
		{:else if result === null}
			<p class="text-4xl font-bold text-zinc-900 dark:text-white">—</p>
		{:else if result > 0}
			<p class="text-4xl font-bold text-emerald-600 dark:text-emerald-400">
				+{formatResult(result)}%
			</p>
		{:else if result < 0}
			<p class="text-4xl font-bold text-red-600 dark:text-red-400">{formatResult(result)}%</p>
		{:else}
			<p class="text-4xl font-bold text-zinc-900 dark:text-white">0%</p>
		{/if}
		<div class="mt-3 border-t border-stone-300 pt-3 dark:border-zinc-700">
			<p class="text-sm text-zinc-500 dark:text-zinc-400">
				{#if result !== null && result !== 'division_by_zero'}
					{i18n.t.percentChange.summaryFrom}
					{fromInput.trim() || '…'}
					{i18n.t.percentChange.summaryTo}
					{toInput.trim() || '…'}: {result > 0 ? '+' : ''}{formatResult(result)}% {i18n.t
						.percentChange.summaryChange}
				{:else}
					—
				{/if}
			</p>
		</div>
	</div>
</div>
