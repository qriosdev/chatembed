<script lang="ts">
	import Widget from './lib/Widget.svelte';
</script>

<section>SECTION #1</section>
<section>SECTION #2</section>

<Widget 
	host="http://localhost:5173" 
	id="3cdf3ab5-60a6-4d63-859b-b6236283acb3"
	btext="Chat"
	htext="Welcome"
	bg="#000000"
	fg="#ffffff"
/>

<style>
	section {
		min-height: 100vh;
	}
</style>
