<script lang="ts">
	let count: number = 0;

	const increment = () => {
		count += 1;
	};
</script>

<button on:click={increment} >
	Clicks: {count}
</button>

<style lang="postcss">
	button {
		@apply px-4 py-2 bg-svelte-100 text-svelte-500 border rounded rounded-[60px];
		font-variant-numeric: tabular-nums;
	}

	button:focus {
		@apply border-2 border-svelte-500;
	}

	button:active {
		@apply bg-svelte-700 text-white;
	}
</style>
