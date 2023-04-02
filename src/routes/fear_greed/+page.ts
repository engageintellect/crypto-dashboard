import type { PageLoad } from './$types';

let chart_values;
let chart_times;
export const load = (async ({ fetch }) => {
	const last_30_days_res = await fetch(`https://api.alternative.me/fng/?limit=30`);
	const last_30_days = await last_30_days_res.json();

	chart_times = last_30_days.data.map((item: { timestamp: any }) => {
		return new Date(item.timestamp * 1000).toLocaleDateString('en-US', {
			weekday: 'short',
			year: '2-digit',
			month: '2-digit',
			day: '2-digit'
		});
	});

	chart_values = last_30_days.data.map((item: { value: number }) => {
		return Number(item.value);
	});

	return { last_30_days, chart_values, chart_times };
}) satisfies PageLoad;
