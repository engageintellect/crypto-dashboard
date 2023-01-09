<script lang="ts">
	import BitcoinChart from '$lib/components/BitcoinChart.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="bg-base-300 rounded-lg shadow-lg">
	<div class="p-4">
		<div class="text-4xl font-bold">BTC/USD</div>

		<div class="text-2xl">
			${data.btc.USD.last}
		</div>
		<div class="text-2xl">
			{data.fear_res.data[0].value}
			{data.fear_res.data[0].value_classification}
			{data.fear_res.data[0].value < 10 ? 'BUY' : 'HOLD'}
		</div>
	</div>

	<BitcoinChart />
</div>
