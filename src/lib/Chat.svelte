<script lang="ts">
	import { onMount } from 'svelte';
	import { chatIsOpen, bubbleHeight } from './store';

	export let host = 'https://qriosai.com';
	export let id: string;
	export let htext: string;
	export let bg: string;
	export let fg: string;

	const src = `${host}/embed/${id}`;

	let iframe: HTMLIFrameElement;

	$: windowHeight = 0;
	$: height = windowHeight < 900 ? windowHeight - $bubbleHeight - 25 + 'px' : '65vh';

	onMount(() => {
		window.addEventListener('message', (event): void => {
			if (event.origin !== host) return;
			if (typeof event.data !== 'string') return;

			if (iframe.contentWindow && event.data === 'qchat_init') {
				const data = {
					url: window.location.href,
					bg,
					fg,
					htext,
				};

				iframe.contentWindow.postMessage(JSON.stringify(data), '*');
			}

			if (event.data === 'qchat_started') {
				// @ts-ignore
				window.dataLayer = window.dataLayer || [];
				// @ts-ignore
				window.dataLayer.push({ event: event.data });
			}
		});
	});
</script>

<svelte:window bind:innerHeight={windowHeight} />

<div class:hidden={!$chatIsOpen}>
	<iframe
		bind:this={iframe}
		{src}
		frameborder="0"
		scrolling="no"
		title="chat widget"
		style:height
	></iframe>
</div>

<style>
	div {
		position: fixed;
		bottom: 4rem;
		left: 1rem;
		right: 1rem;
		overflow: hidden;
		display: flex;
		justify-content: flex-end;
		border-radius: 0.5rem;
		box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.15);
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
