<script lang="ts">
	import Widget from './lib/Widget.svelte';
</script>

<section>SECTION #1</section>
<section>SECTION #2</section>
<Widget host="http://localhost:5173/embed/" id="123" />

<style>
	section {
		min-height: 100vh;
	}
</style>
