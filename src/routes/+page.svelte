<script lang="ts">
	import type { PageData } from './$types';
	import BitcoinChart from '$lib/components/BitcoinChart.svelte';

	export let data: PageData;

	const fear_greed = data.fear_res.data[0].value;
	const fear_greed_classification = data.fear_res.data[0].value_classification;

	const whatToDO = () => {
		if (fear_greed < 20) {
			return 'BUY🚀';
		} else if (fear_greed > 80) {
			return 'SELL📉';
		} else {
			return 'HOLD🕜';
		}
	};
</script>

<div class="bg-base-300 shadow-lg min-h-screen">
	<div class="p-4">
		<div class="flex justify-between items-center">
			<div>
				<div class="text-xl text-base-content lg:text-2xl font-semibold">BTC/USD</div>

				<div class="text-3xl font-bold text-primary">
					<span> $ </span>
					{data.btc.last_trade_price.toLocaleString()}
				</div>
			</div>

			<div
				class="text-lg lg:text-xl text-base-content flex flex-col lg:flex-row lg:gap-5 uppercase items-end"
			>
				<div class="hidden lg:flex">
					{fear_greed}/100
				</div>
				<div class="hidden lg:flex">
					{fear_greed_classification}
				</div>

				<div>
					{#if whatToDO() === 'BUY🚀'}
						<span class="bg-green-600 rounded-full py-1 px-2">{whatToDO()}</span>
					{:else if whatToDO() === 'SELL📉'}
						<span class="bg-red-600 rounded-full py-1 px-2">{whatToDO()}</span>
					{:else}
						<span class=" bg-amber-600 rounded-full py-1 px-2">{whatToDO()}</span>
					{/if}
				</div>
			</div>
		</div>
	</div>

	<BitcoinChart />
</div>
