declare module '*.svx' {
    import { SvelteComponent } from 'svelte';
    const content: typeof SvelteComponent;
    export default content;
  }
  