<svelte:options customElement="qchat-widget" />

<script lang="ts">
	import Bubble from './Bubble.svelte';
	import Chat from './Chat.svelte';

	export let text = 'Have questions?';
	export let bg = '#000000';
	export let fg = '#ffffff';
	export let host = '';
	export let id = '';
</script>

<Chat {host} {id} />
<Bubble {text} {bg} {fg} />
