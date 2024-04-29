<script lang="ts">
	import { chatIsOpen, bubbleHeight } from './store';

	export let host = 'https://qriosai.com/embed/';
	export let id = '';

	const src = `${host}${id}`;

	$: windowHeight = 0;
	$: height = windowHeight < 900 ? windowHeight - $bubbleHeight - 25 + 'px' : '65vh';
</script>

<svelte:window bind:innerHeight={windowHeight} />

<div class:hidden={!$chatIsOpen}>
	<iframe {src} frameborder="0" scrolling="no" title="chat widget" style:height></iframe>
</div>

<style>
	div {
		position: fixed;
		bottom: 4rem;
		left: 0.5rem;
		right: 0.5rem;
		overflow: hidden;
		display: flex;
		justify-content: flex-end;
		border-radius: 0.5rem;
		box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
		transition: all 0.3s;
		z-index: 99999;
	}

	div iframe {
		overflow: hidden;
		width: 100%;
		min-height: 65vh;
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
