<script lang ts>
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaBars from 'svelte-icons/fa/FaBars.svelte';
</script>

<div class="px-2 lg:px-6 navbar bg-base-300 sticky top-0 z-20 text-base-content">
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label
				tabindex="0"
				class="w-7 hover:text-secondary transition-color duration-300 rounded-full"
			>
				<div class="w-7">
					<FaBars />
				</div>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul tabindex="0" class="menu menu-compact dropdown-content mt-7 p-2 shadow bg-base-300 w-52">
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/fear_greed">Fear & Greed</a></li>
				<li><a href="/news">News</a></li>
				<li><a href="/posts">Posts</a></li>
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<a href="/" class="btn btn-ghost normal-case text-xl">Bitcoin</a>
	</div>
	<div class="navbar-end">
		<div class="w-7 hover:text-secondary transition-color duration-300 rounded-full">
			<a href="https://github.com/engageintellect/crypto-dashboard" target="_blank">
				<FaGithub />
			</a>
		</div>
	</div>
</div>
