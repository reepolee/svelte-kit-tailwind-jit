<script>
  import Counter from "$components/Counter.svelte"
</script>

<main class="text-center">
  <h1>Hello world!</h1>
  
  <Counter />
  <p class="py-8">Visit the <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps.</p>
</main>

<style>
  @screen xl {
    h1 {
      @apply text-8xl;
    }
  }
</style>
