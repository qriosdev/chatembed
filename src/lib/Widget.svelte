<svelte:options customElement="qchat-widget" />

<script lang="ts">
	import Bubble from './Bubble.svelte';
	import Chat from './Chat.svelte';

	let { btext, htext, bg, fg, host, id } = $props();
</script>

<Chat {host} {id} {htext} {bg} {fg} />
<Bubble {btext} {bg} {fg} />
