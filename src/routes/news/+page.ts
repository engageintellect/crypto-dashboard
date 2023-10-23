import type { PageLoad } from './$types';
import { PUBLIC_NEWS_API_KEY } from '$env/static/public';

export const load = (async ({ fetch, params }) => {
	const res = await fetch(`https://newsdata.io/api/1/news?apikey=${PUBLIC_NEWS_API_KEY}&q=bitcoin&language=en`);
	const posts = await res.json();

	return { posts };
}) satisfies PageLoad;