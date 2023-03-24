<!-- svelte-ignore a11y-missing-attribute -->
<html>
	<div class="tradingview-widget-container">
		<div id="tradingview_e91d2" style="height: 80vh" />
		<div class="tradingview-widget-copyright" />
		<script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
		<script class="border-lg" type="text/javascript">
			new TradingView.widget({
				autosize: true,
				symbol: 'BITSTAMP:BTCUSD',
				interval: 'D',
				timezone: 'Etc/UTC',
				theme: 'dark',
				style: '1',
				locale: 'en',
				details: false,
				// range: '3M',
				toolbar_bg: '#f1f3f6',
				enable_publishing: false,
				hide_side_toolbar: false,
				allow_symbol_change: true,
				studies: ['RSI@tv-basicstudies'],
				container_id: 'tradingview_e91d2'
			});
		</script>
	</div>
</html>
