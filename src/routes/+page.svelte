<script lang="ts">
	import FaBitcoin from 'svelte-icons/fa/FaBitcoin.svelte';
	import type { PageData } from './$types';
	import BitcoinChart from '$lib/components/BitcoinChart.svelte';

	export let data: PageData;

	const fear_greed = data.fear.data[0].value;
	const fear_greed_classification = data.fear.data[0].value_classification;

	const up_today =
		JSON.stringify(data.today) > JSON.stringify(data.yesterday)
			? 'up'
			: JSON.stringify(data.today) === JSON.stringify(data.yesterday)
			? 'neutral'
			: 'down';

	// Define a type for the classification styles
	type ClassificationStyles = {
		'Extreme Fear': string[];
		Fear: string[];
		Neutral: string[];
		Greed: string[];
		'Extreme Greed': string[];
	};

	// Define the classification styles object
	const classificationStyles: ClassificationStyles = {
		'Extreme Fear': ['emerald-900', 'emerald-800', 'BUY 🚀'],
		Fear: ['emerald-600', 'emerald-500', 'BUY 🚀'],
		Neutral: ['amber-600', 'amber-500', 'HOLD 🕜'],
		Greed: ['red-600', 'red-500', 'HOLD 🕐'],
		'Extreme Greed': ['red-900', 'red-800', 'SELL 💰']
	};

	const [bgColor, hoverBgColor, text] =
		classificationStyles[fear_greed_classification as keyof ClassificationStyles];
</script>

<div class="bg-base-300 shadow-lg min-h-screen rounded-md p-4">
	<div class="flex justify-between items-center">
		<div>
			<div class="text-xl text-base-content lg:text-2xl font-semibold">
				<div class="flex gap-2 items-center pb-2">
					<div class="w-7 h-7"><FaBitcoin /></div>
					<div>BTC/USD</div>
				</div>
			</div>
			<div
				class={`text-4xl lg:text-5xl font-bold ${
					up_today == 'neutral'
						? 'text-info'
						: up_today == 'up'
						? 'text-emerald-600'
						: 'text-red-600'
				}`}
			>
				<span> $ </span>
				{data.btc.last_trade_price.toLocaleString()}
			</div>
			<div class="font-thin text-neutral lg:text-lg">
				<strong>Volume:</strong>
				{data.volume.toLocaleString()}
			</div>
		</div>
		<div
			class="text-lg lg:text-xl text-base-content flex flex-col lg:flex-row lg:gap-5 uppercase items-center"
		>
			<a href="/fear_greed" class="flex items-center gap-5">
				<div class="hidden lg:flex">
					{fear_greed}/100
				</div>
				<div class="hidden lg:flex">
					{fear_greed_classification}
				</div>
				<div
					class={`bg-${bgColor} rounded py-1 px-2 hover:bg-${hoverBgColor} transition-all duration-200`}
				>
					{text}
				</div>
			</a>
		</div>
	</div>
	<BitcoinChart />
</div>
