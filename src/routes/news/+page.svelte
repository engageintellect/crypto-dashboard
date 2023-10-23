<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="px-2">
	<div class="text-4xl font-semibold">News:</div>
	<div>
		<!-- {JSON.stringify(data.posts.results)} -->

		<div class="grid grid-cols-1 gap-2 my-5">
			{#each data.posts.results as post}
				<div class="card">
					<a href={post.link} target="_blank">
						<div class="card-body bg-base-300 border border-base-100 rounded-lg">
							<p class="card-text">{post.pubDate.split(' ')[0]}</p>
							<h2 class="text-teal-500 card-title font-bold">{post.title}</h2>
							<p class="card-subtitle font-semibold text-white/75">{post.description}</p>
						</div>
					</a>
				</div>
			{/each}
		</div>
	</div>
</div>
