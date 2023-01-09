<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="text-4xl">Posts:</div>
<div>
	{#each data.posts as post}
		<div class="card">
			<div class="card-body bg-base-300 my-2 rounded-lg">
				<h2 class="card-title font-bold">{post.id}</h2>
				<p class="card-subtitle font-bold">{post.title}</p>
				<p class="card-text">{post.body}</p>
			</div>
		</div>
	{/each}
</div>
