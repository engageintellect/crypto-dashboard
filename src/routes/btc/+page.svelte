<script lang="ts">
	import type { PageData } from './$types';
	import BitcoinChart from '$lib/components/BitcoinChart.svelte';

	export let data: PageData;
</script>

<div class="text-4xl">BTC</div>

<div class="text-2xl">
	{data.btc.USD.last}
</div>
<div class="text-2xl">
	{data.fear_res.data[0].value}
	{data.fear_res.data[0].value_classification}
	{data.fear_res.data[0].value < 10 ? 'BUY' : 'HOLD'}
</div>

<div class="min-h-screen">
	<BitcoinChart />
</div>
