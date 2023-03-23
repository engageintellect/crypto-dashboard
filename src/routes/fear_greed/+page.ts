import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const last_30_days_res = await fetch(`https://api.alternative.me/fng/?limit=30`);
	const last_30_days = await last_30_days_res.json();

	return { last_30_days };
}) satisfies PageLoad;
