import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const res = await fetch(`https://api.blockchain.com/v3/exchange/tickers/BTC-USD`);
	const btc = await res.json();

	const fear_res = await fetch(`https://api.alternative.me/fng/?limit=1`);
	const fear = await fear_res.json();

	return { btc, fear };
}) satisfies PageLoad;
