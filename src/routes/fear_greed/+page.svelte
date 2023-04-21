<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import type { PageData } from './$types';
	import tw from 'tailwindcss/colors';

	//TODO: fix this
	// @ts-ignore
	import Chart from 'svelte-frappe-charts';
	import Colors from '$lib/components/Colors.svelte';

	export let data: PageData;

	const fear_greed = data.last_30_days.data[0].value;
	const fear_greed_classification = data.last_30_days.data[0].value_classification;
	let chart_times = data.chart_times.reverse();
	let chart_values = data.chart_values.reverse();
	// let chart_classification = data.chart_classification.reverse();

	let chart_data = {
		labels: chart_times,
		datasets: [
			{
				values: chart_values
			}
		]
	};
</script>

<div class="px-2">
	<div class="text-4xl font-semibold">Fear & Greed</div>

	<!-- ----------------------------------------------- -->
	<!-- TODAY -->
	<!-- ----------------------------------------------- -->

	<div class="bg-base-300 p-2 lg:p-4 rounded-md mt-5">
		<div class="text-xl">Today</div>

		<div class="card">
			<div class="my-2">
				<div
					class="flex uppercase justify-center h-24 gap-2 sm:gap-5 items-center text-lg md:text-xlg lg:text-2xl"
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

					<div class="w-full h-full">
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
			<div class="text-xl mb-2 text-base-content">Last 30 days:</div>
			<div class="flex gap-2 sm:gap-5">
				<div class="w-full bg-base-200 rounded-md p-2 flex items-center justify-center">
					{#if Number(data.percent_change) > 0}
						<div class="text-lg mb-2 text-neutral flex flex-col sm:flex-row sm:gap-2">
							Change: <span class="text-emerald-500 text-xl font-semibold"
								>+{data.percent_change}%</span
							>
						</div>
					{:else if Number(data.percent_change) < 0}
						<div class="text-lg mb-2 text-neutral flex-col sm:flex-row sm:gap-2">
							Last 30 Days: <span class="text-red-500 text-xl font-semibold"
								>{data.percent_change}%</span
							>
						</div>
					{:else if Number(data.percent_change) === 0}
						<div class="text-lg mb-2 text-neutral flex-col sm:flex-row sm:gap-2">
							Last 30 Days: <span class="text-amber-500 text-xl font-semibold"
								>{data.percent_change}%</span
							>
						</div>
					{/if}
				</div>
				<div class="w-full bg-base-200 rounded-md p-2 flex justify-center items-center">
					<div class="text-lg mb-2 text-neutral flex flex-col sm:flex-row sm:gap-2">
						Median: <span class="text-xl font-semibold text-base-content">{data.median}</span>
					</div>
				</div>
				<div class="w-full bg-base-200 rounded-md p-2 flex justify-center items-center">
					<div class="text-lg mb-2 text-neutral flex flex-col sm:flex-row sm:gap-2">
						Range: <span class="text-xl font-semibold text-base-content">
							{data.min}-{data.max}
						</span>
					</div>
				</div>
			</div>
		</div>

		<div class="mt-10">
			<!-- <Colors /> -->

			<div class="hidden md:block md:mb-10">
				<Chart
					type="bar"
					data={chart_data}
					colors={[tw.emerald[600], tw.red[600]]}
					height={333}
					spaceRatio={0.5}
					animate={true}
					maxSlices={true}
					xAxisMode={'tick'}
				/>
			</div>

			<div class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 sm:gap-5">
				{#each data.last_30_days.data as day}
					<div
						class="flex flex-col bg-base-100 p-2 gap-2 shadow-md justify-center items-center rounded-md"
					>
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
</div>
