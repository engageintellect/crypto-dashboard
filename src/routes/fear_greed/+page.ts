import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	// TODO: These two fetches are identical, except for the limit parameter. Can we make this more DRY?
	const res = await fetch(`https://api.alternative.me/fng/?limit=6`);
	const fng = await res.json();

	const last_30_days_res = await fetch(`https://api.alternative.me/fng/?limit=30`);
	const last_30_days = await last_30_days_res.json();

	return { fng, last_30_days };
}) satisfies PageLoad;
