<script lang="ts">
	import { percentageBetween, formatResult, parseInputString } from '$lib';
	import { i18n } from '$lib/i18n';

	let partInput = $state('');
	let wholeInput = $state('');

	let result = $derived.by(() => {
		const part = parseInputString(partInput);
		const whole = parseInputString(wholeInput);
		return percentageBetween(part, whole);
	});
</script>

<div>
	<div
		class="mb-5 rounded-xl bg-stone-200 px-4 py-3 font-mono text-sm text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300"
	>
		{i18n.t.percentBetween.formula}
	</div>

	<label class="mb-1.5 block text-xs font-medium text-zinc-500 dark:text-zinc-400" for="part-input">
		{i18n.t.percentBetween.partLabel}
	</label>
	<input
		id="part-input"
		type="text"
		inputmode="decimal"
		bind:value={partInput}
		class="w-full rounded-xl bg-stone-200 px-4 py-3.5 text-lg text-zinc-900 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-400 dark:bg-zinc-700 dark:text-white dark:placeholder:text-zinc-500 dark:focus:ring-zinc-500"
		placeholder={i18n.t.percentBetween.partPlaceholder}
	/>

	<div class="my-3 flex items-center gap-3">
		<span
			class="rounded-lg bg-stone-200 px-2.5 py-1 text-xs font-bold text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300"
			>/</span
		>
		<span class="text-sm text-zinc-500">{i18n.t.percentBetween.dividedBy}</span>
	</div>

	<label
		class="mb-1.5 block text-xs font-medium text-zinc-500 dark:text-zinc-400"
		for="whole-input"
	>
		{i18n.t.percentBetween.wholeLabel}
	</label>
	<input
		id="whole-input"
		type="text"
		inputmode="decimal"
		bind:value={wholeInput}
		class="w-full rounded-xl bg-stone-200 px-4 py-3.5 text-lg text-zinc-900 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-400 dark:bg-zinc-700 dark:text-white dark:placeholder:text-zinc-500 dark:focus:ring-zinc-500"
		placeholder={i18n.t.percentBetween.wholePlaceholder}
	/>

	<div class="mt-5 rounded-xl bg-stone-200 px-5 py-4 dark:bg-zinc-900">
		<p class="mb-2 text-xs font-semibold tracking-widest text-zinc-500">{i18n.t.result}</p>
		{#if result === 'division_by_zero'}
			<p class="text-4xl font-bold text-amber-500 dark:text-amber-400">{i18n.t.errors.divByZero}</p>
		{:else}
			<p class="text-4xl font-bold text-zinc-900 dark:text-white">
				{result !== null ? `${formatResult(result)}%` : '—'}
			</p>
		{/if}
		<div class="mt-3 border-t border-stone-300 pt-3 dark:border-zinc-700">
			<p class="text-sm text-zinc-500 dark:text-zinc-400">
				{#if result !== null && result !== 'division_by_zero'}
					{partInput.trim() || '…'}
					{i18n.t.percentBetween.summaryIs}
					{formatResult(result)}% {i18n.t.percentBetween.summaryOf}
					{wholeInput.trim() || '…'}
				{:else}
					—
				{/if}
			</p>
		</div>
	</div>
</div>
