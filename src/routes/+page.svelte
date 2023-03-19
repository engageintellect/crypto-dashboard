<script lang="ts">
	import BitcoinChart from '$lib/components/BitcoinChart.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	const fear_greed = data.fear_res.data[0].value;
	const fear_greed_classification = data.fear_res.data[0].value_classification;

	const whatToDO = () => {
		if (fear_greed < 10) {
			return 'BUY🚀';
		} else if (fear_greed > 90) {
			return 'SELL📉';
		} else {
			return 'HOLD🕜';
		}
	};
</script>

<div class="bg-base-300 rounded-lg shadow-lg">
	<div class="p-4">
		<div class="flex justify-between items-center">
			<div>
				<div class="text-2xl lg:text-2xl font-bold">BTC/USD</div>

				<div class="text-2xl text-primary">
					${data.btc.USD.last}
				</div>
			</div>

			<div
				class="text-sm md:text-lg lg:text-xl font-semibold flex flex-col lg:flex-row lg:gap-5 uppercase items-end"
			>
				<div class="hidden lg:flex">
					{fear_greed}/100
				</div>
				<div class="hidden lg:flex">
					{fear_greed_classification}
				</div>

				<div>
					{#if whatToDO() === 'BUY🚀'}
						<span class="bg-green-500 rounded-full py-1 px-2">{whatToDO()}</span>
					{:else if whatToDO() === 'SELL📉'}
						<span class="bg-red-500 rounded-full py-1 px-2">{whatToDO()}</span>
					{:else}
						<span class=" bg-amber-500 rounded-full py-1 px-2">{whatToDO()}</span>
					{/if}
				</div>
			</div>
		</div>
	</div>

	<BitcoinChart />
</div>
