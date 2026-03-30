<script lang="ts">
	import PercentageOfNumber from '$lib/components/PercentageOfNumber.svelte';
	import PercentageBetween from '$lib/components/PercentageBetween.svelte';
	import PercentageChange from '$lib/components/PercentageChange.svelte';
	import { i18n } from '$lib/i18n';

	type Tab = 'of' | 'between' | 'change';

	let activeTab = $state<Tab>('of');
	const tabs = $derived<{ id: Tab; label: string }[]>([
		{ id: 'of', label: i18n.t.tabs.percentOf },
		{ id: 'between', label: i18n.t.tabs.whatPercent },
		{ id: 'change', label: i18n.t.tabs.percentChange }
	]);

	const systemDark =
		typeof window !== 'undefined'
			? window.matchMedia('(prefers-color-scheme: dark)').matches
			: false;

	let isDark = $state(systemDark);

	$effect(() => {
		const color = isDark ? '#09090b' : '#f5f5f4';
		document.documentElement.classList.toggle('dark', isDark);
		document.querySelectorAll('meta[name="theme-color"]').forEach((el) => {
			el.setAttribute('content', color);
		});

		const mq = window.matchMedia('(prefers-color-scheme: dark)');
		const onChange = (e: MediaQueryListEvent) => {
			isDark = e.matches;
		};
		mq.addEventListener('change', onChange);
		return () => mq.removeEventListener('change', onChange);
	});

	function toggleTheme() {
		isDark = !isDark;
	}
</script>

<div class="min-h-screen bg-stone-100 px-4 py-10 dark:bg-zinc-950">
	<div class="mx-auto max-w-xl">
		<div class="mb-6 flex items-center gap-3">
			<div
				class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-800 text-lg font-bold text-white"
			>
				%
			</div>
			<span class="text-xl font-medium text-zinc-600 dark:text-zinc-500">{i18n.t.app.header}</span>
			<div class="ml-auto flex items-center gap-2">
				<button
					onclick={i18n.toggle}
					class="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-200 text-xs font-bold text-zinc-500 transition-colors hover:text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
					aria-label={i18n.t.toggleLanguage}
				>
					{i18n.t.toggleLanguage}
				</button>
				<button
					onclick={toggleTheme}
					class="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-200 text-zinc-500 transition-colors hover:text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
					aria-label="Toggle theme"
				>
					{#if isDark}
						<!-- Sun icon -->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="17"
							height="17"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<circle cx="12" cy="12" r="4" />
							<path
								d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
							/>
						</svg>
					{:else}
						<!-- Moon icon -->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="17"
							height="17"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
						</svg>
					{/if}
				</button>
			</div>
		</div>

		<div class="overflow-hidden rounded-2xl bg-stone-50 dark:bg-zinc-800">
			<div class="flex border-b border-stone-200 dark:border-zinc-700">
				{#each tabs as tab, i (tab.id)}
					<button
						class="flex-1 px-4 py-4 text-sm font-medium transition-colors {i < tabs.length - 1
							? 'border-r border-stone-200 dark:border-zinc-700'
							: ''} {activeTab === tab.id
							? 'text-zinc-900 dark:text-white'
							: 'text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200'}"
						onclick={() => (activeTab = tab.id)}
					>
						{tab.label}
					</button>
				{/each}
			</div>

			<div class="p-6 pt-5">
				{#if activeTab === 'of'}
					<PercentageOfNumber />
				{:else if activeTab === 'between'}
					<PercentageBetween />
				{:else}
					<PercentageChange />
				{/if}
			</div>
		</div>
	</div>

	<footer
		class="mx-auto mt-6 flex max-w-xl flex-col gap-1 text-xs text-zinc-500 sm:flex-row sm:justify-between dark:text-zinc-600"
	>
		<a
			href="https://danielsalvado.com"
			target="_blank"
			rel="noopener noreferrer"
			class="transition-colors hover:text-zinc-700 dark:hover:text-zinc-400"
		>
			{i18n.t.footer.madeBy}
		</a>
		<a
			href="https://percentagecalculator.net/"
			target="_blank"
			rel="noopener noreferrer"
			class="transition-colors hover:text-zinc-700 dark:hover:text-zinc-400"
		>
			{i18n.t.footer.inspiredBy}
		</a>
	</footer>
</div>
