<script lang="ts">
	import { onMount } from 'svelte';
	import { chatIsOpen, bubbleHeight } from './store';

	export let host = 'https://qriosai.com';
	export let id: string;
	export let htext: string;
	export let bg: string;
	export let fg: string;

	let src = `${host}/embed/${id}`;
	let iframe: HTMLIFrameElement;
	let loaded = false;

	$: windowHeight = 0;
	$: height = windowHeight < 900 ? windowHeight - $bubbleHeight - 25 + 'px' : '65vh';

	function getCookie(name: string) {
		const cookieArr = document.cookie.split(';');
		for (let i = 0; i < cookieArr.length; i++) {
			const cookiePair = cookieArr[i].split('=');
			if (name == cookiePair[0].trim()) {
				return decodeURIComponent(cookiePair[1]);
			}
		}
		return null;
	}

	function setCookie(name: string, value: string, hours: number) {
		let maxAge = '';
		if (hours) maxAge = '; max-age=' + hours * 60 * 60;
		document.cookie = name + '=' + (value || '') + maxAge + '; path=/';
	}

	onMount(() => {
		const qcsid = getCookie('qcsid');
		if (qcsid) {
			src += `?cid=${qcsid}`;
		}

		window.addEventListener('message', (e): void => {
			if (e.origin !== host) return;
			if (typeof e.data !== 'string') return;

			const data = JSON.parse(e.data);

			if (iframe.contentWindow && data.event === 'qchat_init') {
				const payload = {
					url: window.location.href,
					bg,
					fg,
					htext,
				};

				iframe.contentWindow.postMessage(JSON.stringify(payload), '*');
			}

			if (data.event === 'qchat_started') {
				// @ts-ignore
				window.dataLayer = window.dataLayer || [];
				// @ts-ignore
				window.dataLayer.push({ event: data.event });
			}

			if (data.event === 'qcsid') {
				setCookie('qcsid', data.qcsid, 4);
				console.log('setting qcsid in parent');
			}
		});

		loaded = true;
	});
</script>

<svelte:window bind:innerHeight={windowHeight} />

{#if loaded}
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
{/if}

<style>
	div {
		position: fixed;
		bottom: 4.2rem;
		left: 0.6rem;
		right: 0.6rem;
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
