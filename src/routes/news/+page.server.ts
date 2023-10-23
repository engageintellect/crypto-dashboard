// import type { PageLoad } from './$types';
import { SECRET_NEWS_API_KEY } from '$env/static/private';

export const load = (async ({ fetch, params }) => {
	const res = await fetch(`https://newsdata.io/api/1/news?apikey=${SECRET_NEWS_API_KEY}&q=bitcoin&language=en`);
	const posts = await res.json();

	return { posts };
});