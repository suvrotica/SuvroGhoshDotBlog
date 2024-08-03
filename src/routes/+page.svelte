<script lang="ts">
	import Post1 from './posts/my-first-post.svx';
	import Post2 from './posts/second-post.svx';
	import Divider from '$lib/Divider.svelte';
</script>

<Post1 />
<Divider />
<Post2 />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
