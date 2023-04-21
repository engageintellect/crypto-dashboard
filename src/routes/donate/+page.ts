import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch(
		`https://api.coingecko.com/api/v3/coins/bitcoin?localization=en&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`
	);
	const btc_description = await response.json();

	return btc_description;
}) satisfies PageLoad;
