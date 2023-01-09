<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="text-4xl">Fear & Greed</div>

<div>
	<div class="card">
		<div class="card-body bg-base-300 my-2 rounded-lg">
			<h2 class="card-title font-bold">{data.fng.data[0].value}</h2>
			<p class="card-subtitle font-bold">{data.fng.data[0].value_classification}</p>
		</div>
	</div>
</div>
