<svelte:options customElement="qchat-widget" />

<script lang="ts">
	import Bubble from './Bubble.svelte';
	import Chat from './Chat.svelte';

	export let text: string;
	export let htext: string;
	export let bg: string;
	export let fg: string;
	export let host: string;
	export let id: string;
</script>

<Chat {host} {id} {htext} {bg} {fg} />
<Bubble {text} {bg} {fg} />
