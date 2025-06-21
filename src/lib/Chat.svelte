<script lang="ts">
	import { onMount } from 'svelte';
	import { store } from './store.svelte';

	let {
		host,
		id,
		htext,
		bg,
		fg
	} = $props();

	let src = $state(`${host}/api/assistant/${id}/embed`);
	let iframe = $state<HTMLIFrameElement>();
	let loaded = $state(false);
	let windowHeight = $state(0);

	const height = $derived(
		windowHeight < 900
			? windowHeight - store.bubbleHeight - 25 + 'px'
			: '65vh'
	);

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

	function handleMessage(e: MessageEvent) {
		if (e.origin !== host) return;
		if (typeof e.data !== 'string') return;

		const data = JSON.parse(e.data);

		if (iframe?.contentWindow && data.event === 'qchat_init') {
			const payload = {
				url: window.location.href,
				bg,
				fg,
				htext,
			};

			iframe?.contentWindow?.postMessage(JSON.stringify(payload), '*');
			store.ready = true;
		}

		if (data.event === 'qchat_started') {
			// @ts-ignore
			window.dataLayer = window.dataLayer || [];
			// @ts-ignore
			window.dataLayer.push({ event: data.event });
		}

		if (data.event === 'qchat_close') {
			store.chatIsOpen = false;
		}

		// if (data.event === 'qcsid') {
		// 	setCookie('qcsid', data.qcsid, 4);
		// }
	}

	onMount(() => {
		const qcsid = getCookie('qcsid');
	
		if (qcsid) {
			src += `?sid=${qcsid}`;
		} else {
			const uid = crypto.randomUUID();
			setCookie('qcsid', uid, 4);
			src += `?sid=${uid}`;
		}

		window.addEventListener('message', handleMessage);
		loaded = true;

		return () => {
			window.removeEventListener('message', handleMessage);
		};
	});
</script>

<svelte:window bind:innerHeight={windowHeight} />

{#if loaded}
	<div class:hidden={!store.chatIsOpen}>
		<iframe
			bind:this={iframe}
			src={src}
			frameborder="0"
			scrolling="no"
			title="chat widget"
			style:height={height}
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
