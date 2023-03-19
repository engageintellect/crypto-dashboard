<script>
	import '../app.css';
	import Nav from '../lib/components/Nav.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<div class="bg-base-200">
	<Nav />
	<div class="max-w-5xl mx-auto my-5">
		<slot />
	</div>
	<Footer />
</div>
