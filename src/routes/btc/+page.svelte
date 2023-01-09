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
	<div>
		<div class="tradingview-widget-container">
			<div id="tradingview_b1c2e" style="height: 75vh;" />
			<div class="tradingview-widget-copyright" />
			<script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
			<script type="text/javascript">
				new TradingView.widget({
					autosize: true,
					symbol: 'BNC:BLX',
					interval: 'W',
					timezone: 'Etc/UTC',
					theme: 'dark',
					style: '1',
					locale: 'en',
					toolbar_bg: '#f1f3f6',
					enable_publishing: false,
					withdateranges: true,
					hide_side_toolbar: false,
					allow_symbol_change: true,
					studies: ['MACD@tv-basicstudies', 'RSI@tv-basicstudies'],
					container_id: 'tradingview_b1c2e'
				});
			</script>
		</div>
	</div>
</div>
