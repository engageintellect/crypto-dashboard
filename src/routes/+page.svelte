<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import BitcoinChart from '$lib/components/BitcoinChart.svelte';

	const fear_greed = data.fear.data[0].value;
	const fear_greed_classification = data.fear.data[0].value_classification;
</script>

<div class="bg-base-300 shadow-lg min-h-screen">
	<div class="p-4">
		<div class="flex justify-between items-center">
			<div>
				<div class="text-xl text-base-content lg:text-2xl font-semibold">BTC/USD</div>

				<!-- //TODO: SHOW IF PRICE IS UP OR DOWN SINCE PREVIOUS DAY -->
				<div class="text-4xl font-extrabold text-primary">
					<span> $ </span>
					{data.btc.last_trade_price.toLocaleString()}
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
							<div class="bg-emerald-900 rounded-full py-1 px-2">BUY</div>
						{:else if fear_greed_classification === 'Fear'}
							<div class="bg-emerald-600 rounded-full py-1 px-2">BUY</div>
						{:else if fear_greed_classification === 'Neutral'}
							<div class="bg-amber-600 rounded-full py-1 px-2">HOLD</div>
						{:else if fear_greed_classification === 'Greed'}
							<div class="bg-red-600 rounded-full py-1 px-2">HOLD</div>
						{:else if fear_greed_classification === 'Extreme Greed'}
							<div class="bg-red-900 rounded-full py-1 px-2">SELL</div>
						{/if}
					</div>
				</a>
			</div>
		</div>
	</div>

	<BitcoinChart />
</div>
