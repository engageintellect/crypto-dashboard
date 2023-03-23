<script>
	import '../app.css';
	import Nav from '../lib/components/Nav.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<div class="bg-base-200">
	<Nav />
	<div class="max-w-7xl mx-auto my-5 min-h-screen">
		<slot />
	</div>
	<Footer />
</div>
