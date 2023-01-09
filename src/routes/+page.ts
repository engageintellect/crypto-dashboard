import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  const todo = await res.json();

  console.log('hello world')

  return { todo };
}) satisfies PageLoad;