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

<div bind:offsetHeight={$bubbleHeight} class="fixed bottom-2 right-2 text-right">
	<button
		on:click={handleClick}
		style:background={bg}
		style:color={fg}
		class="relative rounded-full px-8 py-4 drop-shadow-sm">{btnText}</button
	>
</div>
