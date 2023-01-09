import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
	const posts = await res.json();

	console.log('hello world')

	return { posts };
}) satisfies PageLoad;