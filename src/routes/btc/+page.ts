import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const res = await fetch(`https://blockchain.info/ticker`);
	const btc = await res.json();

	const fear = await fetch(`https://api.alternative.me/fng/?limit=1`);
	const fear_res = await fear.json();

	return { btc, fear_res };
}) satisfies PageLoad;