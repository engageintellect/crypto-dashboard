<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import Colors from '$lib/components/Colors.svelte';
	import NewsFeed from '$lib/components/NewsFeed.svelte';
	import TechnicalAnalysis from '$lib/components/TechnicalAnalysis.svelte';

	let description = JSON.stringify(data.description.en);
</script>

<!-- <Colors /> -->

<div class="flex  flex-col gap-5 text-base-content px-2 font-thin text-lg">
	<div class="text-4xl font-semibold text-neutral-content">About Fear & Greed:</div>

	<div class="bg-base-300 p-4 lg:text-xl rounded-md shadow-md italic">
		In the world of investing, emotions often play a significant role in decision-making. Fear and
		greed are two emotions that can heavily influence the behavior of traders in financial markets.
		To quantify these emotions, the market fear and greed index was created. We will discuss what
		the market fear and greed index is and how it can be used for Bitcoin.
	</div>

	<table class="table rounded-xl text-sm shadow-lg font-semibold">
		<thead>
			<tr>
				<th class="bg-slate-500 text-md lg:text-lg">Score</th>
				<th class="bg-slate-500 text-md lg:text-lg">Sentiment</th>
				<th class="bg-slate-500 text-md lg:text-lg">Action</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>0-25</td>
				<td class="bg-emerald-900">EXTREME GREED </td>
				<td class="font-bold">BUY</td>
			</tr>

			<tr>
				<td>25-50</td>
				<td class="bg-emerald-600">FEAR</td>
				<td class="font-bold">BUY</td>
			</tr>

			<tr>
				<td>50-55</td>
				<td class="bg-amber-600">NEUTRAL</td>
				<td class="font-bold">HOLD</td>
			</tr>

			<tr>
				<td>55-75</td>
				<td class="bg-red-600">GREED</td>
				<td class="font-bold">HOLD</td>
			</tr>
			<tr>
				<td>75-100</td>
				<td class="bg-red-900">EXTREME GREED</td>
				<td class="font-bold">SELL</td>
			</tr>
		</tbody>
	</table>

	<div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
		<div class="flex flex-col gap-5 bg-base-100 p-4 rounded-md">
			<div class="text-3xl font-semibold text-neutral-content">
				What is the Market Fear and Greed Index?
			</div>

			<div>
				The market fear and greed index is a sentiment indicator that measures the emotions of
				traders in financial markets. It is a composite index that takes into account various
				factors such as volatility, volume, put/call ratios, and other technical indicators. The
				index ranges from 0 to 100, where a score of 0 indicates extreme fear, and a score of 100
				indicates extreme greed.
			</div>

			<div>
				The index is calculated daily and can be used for various financial instruments such as
				stocks, bonds, and currencies. It is a useful tool for investors as it can provide insights
				into the overall sentiment of the market.
			</div>
		</div>

		<div class="flex flex-col gap-5 bg-base-100 p-4 rounded-md">
			<div class="text-3xl font-semibold text-neutral-content">How can it be used for Bitcoin?</div>

			<div>
				Bitcoin is a <strong>highly</strong> volatile asset, and emotions often play a significant role
				in its price movements. The market fear and greed index can be used to gauge the sentiment of
				traders towards Bitcoin. When the index is in the extreme fear zone, it may be an excellent opportunity
				to buy Bitcoin as it could indicate that the asset is oversold. On the other hand, when the index
				is in the extreme greed zone, it may be a sign that the asset is overbought and could experience
				a price correction.
			</div>

			<div>
				It is important to note that the market fear and greed index should not be used in isolation
				when making investment decisions. It should be used in conjunction with other fundamental
				and technical analysis tools.
			</div>
		</div>
		<div class="flex flex-col gap-5 bg-base-100 p-4 rounded-md">
			<div class="text-3xl font-semibold text-neutral-content">Conclusion</div>

			<div>
				The market fear and greed index is a sentiment indicator that measures the emotions of
				traders in financial markets. It is a useful tool for investors as it can provide insights
				into the overall sentiment of the market. When used in conjunction with other fundamental
				and technical analysis tools, it can be a powerful tool for making investment decisions. As
				for Bitcoin, the market fear and greed index can be used to gauge the sentiment of traders
				towards the asset, providing a potential opportunity for buying or selling the
				cryptocurrency.
			</div>
		</div>
	</div>

	<div class="flex flex-col gap-5 my-10 bg-base-100 p-4 rounded-md shadow-md">
		<div class="text-4xl font-semibold text-neutral-content">The Algorithm</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
			<div class="bg-base-300 rounded-md shadow-md p-4">
				<div class="text-2xl font-semibold text-neutral-content">Volatility (25 %)</div>
				<div>
					We’re measuring the current volatility and max. drawdowns of bitcoin and compare it with
					the corresponding average values of the last 30 days and 90 days. We argue that an unusual
					rise in volatility is a sign of a fearful market.
				</div>
			</div>

			<div class="bg-base-300 rounded-md shadow-md p-4">
				<div class="text-2xl font-semibold text-neutral-content">Market Momentum (25%)</div>
				<div>
					Also, we’re measuring the current volume and market momentum (again in comparison with the
					last 30/90 day average values) and put those two values together. Generally, when we see
					high buying volumes in a positive market on a daily basis, we conclude that the market
					acts overly greedy / too bullish.
				</div>
			</div>
			<div class="bg-base-300 rounded-md shadow-md p-4">
				<div class="text-2xl font-semibold text-neutral-content">Social Media (15%)</div>
				<div>
					While our reddit sentiment analysis is still not in the live index (we’re still
					experimenting some market-related key words in the text processing algorithm), our twitter
					analysis is running. There, we gather and count posts on various hashtags for each coin
					(publicly, we show only those for Bitcoin) and check how fast and how many interactions
					they receive in certain time frames). A unusual high interaction rate results in a grown
					public interest in the coin and in our eyes, corresponds to a greedy market behaviour.
				</div>
			</div>
			<div class="bg-base-300 rounded-md shadow-md p-4">
				<div class="text-2xl font-semibold text-neutral-content">Surveys (15%)</div>
				<div>
					currently paused Together with strawpoll.com (disclaimer: we own this site, too), quite a
					large public polling platform, we’re conducting weekly crypto polls and ask people how
					they see the market. Usually, we’re seeing 2,000 - 3,000 votes on each poll, so we do get
					a picture of the sentiment of a group of crypto investors. We don’t give those results too
					much attention, but it was quite useful in the beginning of our studies. You can see some
					recent results here.
				</div>
			</div>
			<div class="bg-base-300 rounded-md shadow-md p-4">
				<div class="text-2xl font-semibold text-neutral-content">Dominance (10%)</div>
				<div>
					The dominance of a coin resembles the market cap share of the whole crypto market.
					Especially for Bitcoin, we think that a rise in Bitcoin dominance is caused by a fear of
					(and thus a reduction of) too speculative alt-coin investments, since Bitcoin is becoming
					more and more the safe haven of crypto. On the other side, when Bitcoin dominance shrinks,
					people are getting more greedy by investing in more risky alt-coins, dreaming of their
					chance in next big bull run. Anyhow, analyzing the dominance for a coin other than
					Bitcoin, you could argue the other way round, since more interest in an alt-coin may
					conclude a bullish/greedy behaviour for that specific coin.
				</div>
			</div>
			<div class="bg-base-300 rounded-md shadow-md p-4">
				<div class="text-2xl font-semibold text-neutral-content">Trends (10%)</div>
				<div>
					We pull Google Trends data for various Bitcoin related search queries and crunch those
					numbers, especially the change of search volumes as well as recommended other currently
					popular searches. For example, if you check Google Trends for "Bitcoin", you can’t get
					much information from the search volume. But currently, you can see that there is
					currently a +1,550% rise of the query „bitcoin price manipulation“ in the box of related
					search queries (as of 05/29/2018). This is clearly a sign of fear in the market, and we
					use that for our index.
				</div>
			</div>
		</div>
	</div>
</div>
