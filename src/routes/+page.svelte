<script lang="ts">
	import type { PageData } from './$types';
	import BitcoinChart from '$lib/components/BitcoinChart.svelte';
	export let data: PageData;
	let up_today: string;

	const fear_greed = data.fear.data[0].value;
	const fear_greed_classification = data.fear.data[0].value_classification;

	if (JSON.stringify(data.today) > JSON.stringify(data.yesterday)) {
		up_today = 'up';
	} else if (JSON.stringify(data.today) == JSON.stringify(data.yesterday)) {
		up_today = 'neutral';
	} else {
		up_today = 'down';
	}

	// DEBUG
	// console.log({ today: JSON.stringify(data.today), yesterday: JSON.stringify(data.yesterday) });
	// console.log(`${up_today} today`);
</script>

<div class="bg-base-300 shadow-lg min-h-screen rounded-md">
	<div class="p-4">
		<div class="flex justify-between items-center">
			<div>
				<div class="text-xl text-base-content lg:text-2xl font-semibold">BTC/USD</div>

				<div
					class="text-4xl lg:text-5xl font-extrabold {up_today == 'neutral'
						? 'text-info'
						: up_today == 'up'
						? 'text-emerald-600'
						: 'text-red-600'}"
				>
					<span> $ </span>
					{data.btc.last_trade_price.toLocaleString()}
				</div>
				<div class="font-thin text-neutral lg:text-lg">
					<strong>Volume:</strong>
					{data.volume.toLocaleString()}
				</div>
			</div>

			<div
				class="text-lg lg:text-xl text-base-content flex flex-col lg:flex-row lg:gap-5 uppercase items-center"
			>
				<a href="/fear_greed" class="flex items-center gap-5">
					<div class="hidden lg:flex">
						{fear_greed}/100
					</div>
					<div class="hidden lg:flex">
						{fear_greed_classification}
					</div>

					<div>
						{#if fear_greed_classification === 'Extreme Fear'}
							<div
								class="bg-emerald-900 rounded-full py-1 px-2 hover:bg-emerald-800 transition-all duration-200"
							>
								BUY 🚀
							</div>
						{:else if fear_greed_classification === 'Fear'}
							<div
								class="bg-emerald-600 rounded-full py-1 px-2 hover:bg-emerald-500 transition-all duration-200"
							>
								BUY 🚀
							</div>
						{:else if fear_greed_classification === 'Neutral'}
							<div
								class="bg-amber-600 rounded-full py-1 px-2 hover:bg-amber-500 transition-all duration-200"
							>
								HOLD 🕜
							</div>
						{:else if fear_greed_classification === 'Greed'}
							<div
								class="bg-red-600 rounded-full py-1 px-2 hover:bg-red-500 transition-all duration-200"
							>
								HOLD 🕐
							</div>
						{:else if fear_greed_classification === 'Extreme Greed'}
							<div
								class="bg-red-900 rounded-full py-1 px-2 hover:bg-red-800 transition-all duration-200"
							>
								SELL 💰
							</div>
						{/if}
					</div>
				</a>
			</div>
		</div>
	</div>

	<BitcoinChart />
</div>
