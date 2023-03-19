<script lang="ts">
	import About from '$lib/components/About.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	const fear_greed = data.fng.data[0].value;
	const fear_greed_classification = data.fng.data[0].value_classification;
</script>

<div>
	<div class="text-4xl">Fear & Greed</div>

	<div class="card">
		<div class="card-body bg-base-300 my-2 rounded-lg">
			<div class="flex justify-between items-center text-md md:text-lg lg:text-xl">
				<div class=" font-bold">
					{fear_greed}/100
				</div>
				<div class="font-bold">
					{#if fear_greed_classification === 'Extreme Fear'}
						<span class="bg-red-600 rounded-full py-1 px-2">{fear_greed_classification}</span>
					{:else if fear_greed_classification === 'Fear'}
						<span class="bg-amber-600 rounded-full py-1 px-2">{fear_greed_classification}</span>
					{:else if fear_greed_classification === 'Extreme Greed'}
						<span class="bg-green-600 rounded-full py-1 px-2">{fear_greed_classification}</span>
					{:else if fear_greed_classification === 'Greed'}
						<span class="bg-green-600 rounded-full py-1 px-2">{fear_greed_classification}</span>
					{:else}
						<span class="bg-amber-600 rounded-full py-1 px-2">{fear_greed_classification}</span>
					{/if}
				</div>

				<div class=" font-bold">
					{#if fear_greed < 10}
						<span class="bg-green-600 rounded-full py-1 px-2">BUY🚀</span>
					{:else if fear_greed > 90}
						<span class="bg-red-600 rounded-full py-1 px-2">SELL📉</span>
					{:else}
						<span class=" bg-amber-600 rounded-full py-1 px-2">HOLD🕜</span>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

<div>
	<div>
		<a href="/about"> What is the Fear & Greed Index?</a>
	</div>
</div>
