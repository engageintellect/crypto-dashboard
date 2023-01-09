<script>
	import '../app.css';
	import Nav from '../lib/components/Nav.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<div class="bg-base-200">
	<Nav />
	<div class="container py-10 px-6 mx-auto min-h-screen">
		<slot />
	</div>
	<Footer />
</div>
