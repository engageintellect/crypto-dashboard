import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const btc_res = await fetch(`https://api.blockchain.com/v3/exchange/tickers/BTC-USD`);
	const btc = await btc_res.json();

	const btc_daily_res = await fetch(
		`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=daily`
	);
	const btc_daily = await btc_daily_res.json();
	const btc_yesterday = await btc_daily.prices[0][1];

	const fear_res = await fetch(`https://api.alternative.me/fng/?limit=1`);
	const fear = await fear_res.json();

	return { btc, btc_yesterday, fear };
}) satisfies PageLoad;
