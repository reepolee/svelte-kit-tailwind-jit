<script>
  let count = 0
  
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment}>
  Clicks: {count}
</button>

<style>
  button {
    @apply px-4 py-2 bg-svelte-100 text-svelte-500 border rounded rounded-[60px];
    font-variant-numeric: tabular-nums;
    
    &:focus {
      @apply border-2 border-svelte-500;
    }
    
    &:active {
      @apply bg-svelte-700 text-white;
    }
  }
</style>
