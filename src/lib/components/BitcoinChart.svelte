<!-- svelte-ignore a11y-missing-attribute -->

<!-- TradingView Widget BEGIN -->
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
<!-- TradingView Widget END -->
