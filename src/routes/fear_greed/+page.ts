import type { PageLoad } from './$types';

let chart_values;
let chart_times;
let chart_classification;
export const load = (async ({ fetch }) => {
	const last_30_days_res = await fetch(`https://api.alternative.me/fng/?limit=30`);
	const last_30_days = await last_30_days_res.json();

	const day_1 = last_30_days.data[0].value;
	const day_30 = last_30_days.data[29].value;

	const percent_change_raw = ((day_1 - day_30) / day_30) * 100;
	const percent_change = percent_change_raw.toFixed(2);

	console.log('percent change is', percent_change);

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

	//TODO: This is redundant.
	chart_classification = last_30_days.data.map((item: { value_classification: string }) => {
		return item.value_classification;
	});

	return { last_30_days, chart_values, chart_times, chart_classification, percent_change };
}) satisfies PageLoad;
