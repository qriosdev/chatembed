<script lang="ts">
	import { chatIsOpen, bubbleHeight } from './store';

	export let text = 'Have questions?';
	export let bg = '#000000';
	export let fg = '#ffffff';

	$: btnText = $chatIsOpen ? 'Close' : text;

	function handleClick() {
		$chatIsOpen = !$chatIsOpen;
	}
</script>

<div bind:offsetHeight={$bubbleHeight}>
	<button on:click={handleClick} style:background={bg} style:color={fg}>{btnText}</button>
</div>

<style>
	div {
		position: fixed;
		bottom: 0.5rem;
		right: 0.5rem;
		text-align: right;
		transition: all 0.3s;
	}

	div > button {
		position: relative;
		border-radius: 100rem;
		padding: 1rem 2rem;
		box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
	}
</style>
