<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const fear_greed = data.fng.data[0].value;
	const fear_greed_classification = data.fng.data[0].value_classification;
</script>

<div class="px-2">
	<div class="text-4xl">Fear & Greed</div>

	<!-- ----------------------------------------------- -->
	<!-- TODAY -->
	<!-- ----------------------------------------------- -->
	<div class="text-xl mt-10">Today</div>

	<div class="card">
		<div class="card-body bg-base-300 my-2">
			<div class="flex justify-between items-center text-lg md:text-xlg lg:text-2xl">
				<div class="bg-neutral py-1 px-2 rounded-full">
					{fear_greed}/100
				</div>
				<div class="">
					{#if fear_greed_classification === 'Extreme Fear'}
						<span class="bg-emerald-600 rounded-full py-1 px-2">{fear_greed_classification}</span>
					{:else if fear_greed_classification === 'Fear'}
						<span class="bg-emerald-600 rounded-full py-1 px-2">{fear_greed_classification}</span>
					{:else if fear_greed_classification === 'Extreme Greed'}
						<span class="bg-red-600 rounded-full py-1 px-2">{fear_greed_classification}</span>
					{:else if fear_greed_classification === 'Greed'}
						<span class="bg-red-600 rounded-full py-1 px-2">{fear_greed_classification}</span>
					{:else}
						<span class="bg-amber-600 rounded-full py-1 px-2">{fear_greed_classification}</span>
					{/if}
				</div>

				<div class="">
					{#if fear_greed < 20}
						<span class="bg-emerald-600 rounded-full py-1 px-2">BUY🚀</span>
					{:else if fear_greed > 80}
						<span class="bg-red-600 rounded-full py-1 px-2">SELL📉</span>
					{:else}
						<span class=" bg-amber-600 rounded-full py-1 px-2">HOLD🕜</span>
					{/if}
				</div>
			</div>
		</div>
	</div>

	<div class="text-center">
		<a href="/about"> What is the Fear & Greed Index?</a>
	</div>

	<!-- ----------------------------------------------- -->
	<!-- LAST 7 DAYS -->
	<!-- ----------------------------------------------- -->

	<!-- ----------------------------------------------- -->
	<!-- LAST 30 DAYS -->
	<!-- ----------------------------------------------- -->
	<div class="mt-10">
		<div class="text-xl">Last 30 Days</div>

		<div class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 sm:gap-5">
			{#each data.last_30_days.data as day}
				<div class="flex flex-col bg-base-100 p-2 gap-2 shadow-md">
					<div>
						{#if day.calue_classification === 'Extreme Fear'}
							<span class="bg-emerald-900 rounded-full py-1 px-2">BUY</span>
						{:else if day.value_classification === 'Fear'}
							<span class="bg-emerald-600 rounded-full py-1 px-2">ADD</span>
						{:else if day.value_classification === 'Neutral'}
							<span class="bg-amber-600 rounded-full py-1 px-2">HOLD</span>
						{:else if day.value_classification === 'Greed'}
							<span class="bg-red-600 rounded-full py-1 px-2">HOLD</span>
						{:else if day.value_classification === 'Extreme Greed'}
							<span class="bg-red-900 rounded-full py-1 px-2">SELL</span>
						{/if}
						<!-- {day.value_classification} -->
					</div>
					<div>
						{day.value}/100
					</div>
					<div class="font-thin text-sm">
						{new Date(day.timestamp * 1000).toLocaleDateString('en-US', {
							weekday: 'short',
							year: '2-digit',
							month: '2-digit',
							day: '2-digit'
						})}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
