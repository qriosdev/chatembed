<script lang="ts">
	import Widget from './lib/Widget.svelte';
</script>

<section>SECTION #1</section>
<section>SECTION #2</section>

<Widget host="http://localhost:5173" id="95fbf08e-16a1-4ecd-984b-a6b65d5429c3" />

<style>
	section {
		min-height: 100vh;
	}
</style>
