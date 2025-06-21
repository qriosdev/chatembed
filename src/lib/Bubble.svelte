<script lang="ts">
	import { store } from './store.svelte';

	let { btext = 'Have questions?', bg = '#000000', fg = '#ffffff' } = $props();

	const btnText = $derived(store.chatIsOpen ? 'Close' : btext);

	function handleClick() {
		store.chatIsOpen = !store.chatIsOpen;
	}
</script>

{#if store.ready}
<div bind:offsetHeight={store.bubbleHeight}>
	<button onclick={handleClick} style:background={bg} style:color={fg} aria-label={btnText}>
			{btnText}
		</button>
	</div>
{/if}

<style>
	div {
		position: fixed;
		bottom: 0.6rem;
		right: 0.6rem;
		text-align: right;
		transition: all 0.3s;
		z-index: 99998;
	}

	div > button {
		position: relative;
		border-radius: 100rem;
		padding: 1rem 2rem;
		box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
		font-family: ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol', 'Noto Color Emoji';
		font-size: 15px;
		font-weight: 800;
		border: none;
		outline: none;
		cursor: pointer;
	}
</style>
