<script lang="ts">
	import { chatIsOpen, bubbleHeight } from './store';

	export let host = '';
	export let id = '';

	const src = `${host}${id}`;

	$: windowHeight = 0;

	$: console.log(windowHeight);

	$: height = windowHeight < 1000 ? windowHeight - $bubbleHeight - 25 + 'px' : '60vh';
</script>

<svelte:window bind:innerHeight={windowHeight} />

<div
	class:hidden={!$chatIsOpen}
	class="fixed bottom-16 right-2 drop-shadow-sm rounded-md mb-2 overflow-hidden flex justify-end left-2 md:left-auto"
>
	<iframe
		{src}
		frameborder="0"
		scrolling="no"
		title="chat widget"
		style:height
		class="overflow-hidden w-full min-h-[60vh] md:w-[400px]"
	></iframe>
</div>
