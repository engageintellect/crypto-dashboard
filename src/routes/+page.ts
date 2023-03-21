import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	// TODO: Refactor these vars
	const res = await fetch(`https://api.blockchain.com/v3/exchange/tickers/BTC-USD`);
	const btc = await res.json();

	// TODO: Refactor these vars
	const fear = await fetch(`https://api.alternative.me/fng/?limit=1`);
	const fear_res = await fear.json();

	return { btc, fear_res };
}) satisfies PageLoad;
