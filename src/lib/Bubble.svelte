<script lang="ts">
	import { chatIsOpen, bubbleHeight } from './store';

	export let btext = 'Have questions?';
	export let bg = '#000000';
	export let fg = '#ffffff';

	$: btnText = $chatIsOpen ? 'Close' : btext;

	function handleClick() {
		$chatIsOpen = !$chatIsOpen;
	}
</script>

<div bind:offsetHeight={$bubbleHeight}>
	<button on:click={handleClick} style:background={bg} style:color={fg} aria-label={btnText}>
		{btnText}
	</button>
</div>

<style>
	div {
		position: fixed;
		bottom: 1rem;
		right: 1rem;
		text-align: right;
		transition: all 0.3s;
		z-index: 99998;
	}

	div > button {
		position: relative;
		border-radius: 100rem;
		padding: 1rem 2rem;
		box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
		font-family: inherit;
		font-size: 15px;
		font-weight: 600;
		border: none;
		outline: none;
		cursor: pointer;
	}
</style>
