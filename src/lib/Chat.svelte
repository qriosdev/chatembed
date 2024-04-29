<script lang="ts">
	import { chatIsOpen, bubbleHeight } from './store';

	export let host = '';
	export let id = '';

	const src = `${host}${id}`;

	$: windowHeight = 0;
	$: height = windowHeight < 900 ? windowHeight - $bubbleHeight - 25 + 'px' : '65vh';
</script>

<svelte:window bind:innerHeight={windowHeight} />

<div class:sr-only={!$chatIsOpen}>
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

	.sr-only {
		border: 0 !important;
		clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
		-webkit-clip-path: inset(50%) !important;
		clip-path: inset(50%) !important; /* 2 */
		height: 1px !important;
		margin: -1px !important;
		overflow: hidden !important;
		padding: 0 !important;
		position: absolute !important;
		width: 1px !important;
		white-space: nowrap !important; /* 3 */
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
