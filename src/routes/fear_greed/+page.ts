import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const res = await fetch(`https://api.alternative.me/fng/?limit=6`);
	const fng = await res.json();

	return { fng };
}) satisfies PageLoad;
