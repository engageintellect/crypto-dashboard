import type { PageLoad } from './$types';

let chart_values;
let chart_times;
let chart_classification;
let min: number;
let max: number;

export const load = (async ({ fetch }) => {
	const last_30_days_res = await fetch(`https://api.alternative.me/fng/?limit=30`);
	const last_30_days = await last_30_days_res.json();

	const day_1 = last_30_days.data[0].value;
	const day_30 = last_30_days.data[29].value;

	const percent_change = (((day_1 - day_30) / day_30) * 100).toFixed(2);

	interface Data {
		value: number;
	}

	// Extract property values from each object in last_30_days array and convert to numbers
	const numericValues = last_30_days.data.map((obj: Data) => Number(obj.value));

	// Function to calculate median
	function calculateMedian(arr: number[]): number {
		// Sort the array in ascending order
		const sortedArr = arr.sort((a, b) => a - b);
		min = sortedArr[0];
		max = sortedArr[sortedArr.length - 1];

		console.log(min, max);

		// Find the middle index
		const middleIndex = Math.floor(sortedArr.length / 2);

		// If the array has an odd number of elements, return the middle value
		if (sortedArr.length % 2 !== 0) {
			return sortedArr[middleIndex];
		} else {
			// If the array has an even number of elements, return the average of the two middle values
			return (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
		}
	}

	// Calculate the median of the extracted numeric data values
	const median = calculateMedian(numericValues);

	chart_times = last_30_days.data.map((item: { timestamp: number }) => {
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

	return {
		last_30_days,
		chart_values,
		chart_times,
		chart_classification,
		percent_change,
		median,
		min,
		max
	};
}) satisfies PageLoad;
