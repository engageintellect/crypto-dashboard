<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="text-4xl">Posts:</div>
<!-- <div>{JSON.stringify(data.posts)}</div> -->

<div>
	{#each data.posts as post}
		<div class="card">
			<div class="card-body">
				<h2 class="card-title">{post.id}</h2>
				<p class="card-subtitle">{post.title}</p>
				<p class="card-text">{post.body}</p>
			</div>
		</div>
	{/each}
</div>
