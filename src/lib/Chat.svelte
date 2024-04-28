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

<div class:hidden={!$chatIsOpen}>
	<iframe {src} frameborder="0" scrolling="no" title="chat widget" style:height></iframe>
</div>

<style>
	div {
		position: fixed;
		bottom: 4.5rem;
		left: 0.5rem;
		right: 0.5rem;
		overflow: hidden;
		display: flex;
		justify-content: flex-end;
		border-radius: 0.5rem;
		box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
		transition: all 0.3s;
	}

	div iframe {
		overflow: hidden;
		width: 100%;
		min-height: 60vh;
	}

	.hidden {
		display: none;
	}

	@media (min-width: 768px) {
		div {
			left: auto;
		}

		div iframe {
			width: 400px;
		}
	}
</style>
