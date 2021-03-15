# SvelteKit with TailwindCSS JIT

This is highly experimental template as neither Svelte Kit not TailwindCSS JIT are production ready.

# Installation

```
git clone https://github.com/reepolee/svelte-kit-tailwind-jit.git
cd svelte-kit-tailwind-jit
npm i
npm run dev -- --open
```

# TailwindCSS

Tailwind classes and `@apply` statements are currently split between CSS and Svelte files and components, to test the behaviour of JIT.

# Remarks

I've notice Vite doesn't reload CSS on tailwind.config.cjg change. PostCSS catched the change but HMR doesn't occur.


# Further reading

[SvelteKit](https://github.com/sveltejs/kit)  
[TailwindCSS JIT](https://github.com/tailwindlabs/tailwindcss-jit)

