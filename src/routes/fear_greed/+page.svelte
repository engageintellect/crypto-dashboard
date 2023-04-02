<script lang="ts">
	import Chart from 'svelte-frappe-charts';
	import Card from '$lib/components/Card.svelte';
	import type { PageData } from './$types';
	import tw from 'tailwindcss/colors';

	export let data: PageData;

	const fear_greed = data.last_30_days.data[0].value;
	const fear_greed_classification = data.last_30_days.data[0].value_classification;
	let chart_data = {
		labels: data.chart_times,
		datasets: [
			{
				values: data.chart_values
			}
		]
	};
</script>

<div class="px-2">
	<div class="text-4xl">Fear & Greed</div>

	<!-- ----------------------------------------------- -->
	<!-- TODAY -->
	<!-- ----------------------------------------------- -->
	<div class="text-xl mt-10">Today</div>

	<div class="card">
		<div class="my-2">
			<div
				class="flex uppercase justify-between h-24 gap-2 sm:gap-5 items-center text-lg md:text-xlg lg:text-2xl"
			>
				<Card classification="{fear_greed}/100" bg_color="bg-base-100" />

				{#if fear_greed_classification === 'Extreme Fear'}
					<Card classification="Extreme Fear" bg_color="bg-red-900" emoji="😨" />
				{:else if fear_greed_classification === 'Fear'}
					<Card classification="Fear" bg_color="bg-red-600" emoji="😱" />
				{:else if fear_greed_classification === 'Neutral'}
					<Card classification="Neutral" bg_color="bg-amber-600" emoji="😑" />
				{:else if fear_greed_classification === 'Greed'}
					<Card classification="Greed" bg_color="bg-emerald-600" emoji="🤑" />
				{:else if fear_greed_classification === 'Extreme Greed'}
					<Card classification="Extreme Greed" bg_color="bg-emerald-900" emoji="🤪" />
				{/if}

				<div class="bg-green-200 w-full h-full shadow-md">
					{#if fear_greed_classification === 'Extreme Fear'}
						<Card classification="buy" bg_color="bg-emerald-900" emoji="💰" />
					{:else if fear_greed_classification === 'Fear'}
						<Card classification="buy" bg_color="bg-emerald-600" emoji="🪙" />
					{:else if fear_greed_classification === 'Neutral'}
						<Card classification="hold" bg_color="bg-amber-600" emoji="⏳" />
					{:else if fear_greed_classification === 'Greed'}
						<Card classification="hold" bg_color="bg-red-600" emoji="⌛" />
					{:else if fear_greed_classification === 'Extreme Greed'}
						<Card classification="sell" bg_color="bg-red-900" emoji="🏧" />
					{/if}
				</div>
			</div>
		</div>
	</div>

	<div class="text-center">
		<a href="/about"> What is the Fear & Greed Index?</a>
	</div>

	<!-- ----------------------------------------------- -->
	<!-- LAST 30 DAYS -->
	<!-- ----------------------------------------------- -->
	<div class="mt-10">
		<div class="text-xl mb-2">Last 30 Days</div>
		<div class="hidden md:block md:mb-10">
			<Chart type="line" data={chart_data} colors={[tw.slate[100], tw.red[600]]} height={333} />
		</div>

		<div class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 sm:gap-5">
			{#each data.last_30_days.data as day}
				<div class="flex flex-col bg-base-100 p-2 gap-2 shadow-md justify-center items-center">
					<div class="font-thin text-sm">
						{new Date(day.timestamp * 1000).toLocaleDateString('en-US', {
							weekday: 'short',
							year: '2-digit',
							month: '2-digit',
							day: '2-digit'
						})}
					</div>

					<div>
						{#if day.value_classification === 'Extreme Fear'}
							<span class="bg-emerald-900 rounded-full py-1 px-2">BUY</span>
						{:else if day.value_classification === 'Fear'}
							<span class="bg-emerald-600 rounded-full py-1 px-2">BUY</span>
						{:else if day.value_classification === 'Neutral'}
							<span class="bg-amber-600 rounded-full py-1 px-2">HOLD</span>
						{:else if day.value_classification === 'Greed'}
							<span class="bg-red-600 rounded-full py-1 px-2">HOLD</span>
						{:else if day.value_classification === 'Extreme Greed'}
							<span class="bg-red-900 rounded-full py-1 px-2">SELL</span>
						{/if}
					</div>

					<div>
						{day.value}/100
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
