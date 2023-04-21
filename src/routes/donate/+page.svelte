<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import Colors from '$lib/components/Colors.svelte';
	import NewsFeed from '$lib/components/NewsFeed.svelte';
	import TechnicalAnalysis from '$lib/components/TechnicalAnalysis.svelte';
	import FaBitcoin from 'svelte-icons/fa/FaBitcoin.svelte';
	import FaEthereum from 'svelte-icons/fa/FaEthereum.svelte';
	import FaPaypal from 'svelte-icons/fa/FaPaypal.svelte';
	import FaCommentDollar from 'svelte-icons/fa/FaCommentDollar.svelte';

	let description = JSON.stringify(data.description.en);
</script>

<!-- <Colors /> -->

<div class="flex  flex-col gap-5 text-base-content px-2 font-thin text-lg">
	<div class="text-4xl font-semibold text-neutral-content">Donate:</div>

	<div class="text-primary font-semibold">
		<p>
			Please consider donating to this project. Your donation will help us to continue our work and
			make future improvements.
		</p>

		<p>Every little bit helps, your support is appreciated.</p>
	</div>

	<div class="flex flex-col gap-5 bg-base-100 p-4 rounded-md shadow-md">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
			<div>
				<a href="https://mempool.space/address/bc1qeywstujt6lkvfcwr30kklavr25jxvr7d53jh0ja">
					<div
						class="bg-base-300 md:hover:bg-base-200 md:hover:shadow-lg transition-all duration-200 rounded-md shadow-md p-4 h-24 text-center flex justify-center items-center gap-2 text-2xl font-semibold text-neutral-content pb-2"
					>
						<div class="w-10 h-10"><FaBitcoin /></div>
						<div>Bitcoin</div>
					</div>
				</a>
			</div>

			<div>
				<a href="https://etherscan.io/address/0xbCF8407880978E86BDCd53C04796713F24e6Ee3c">
					<div
						class="bg-base-300 md:hover:bg-base-200 md:hover:shadow-lg transition-all rounded-md shadow-md p-4 h-24 text-center flex justify-center items-center gap-2 text-2xl font-semibold text-neutral-content pb-2"
					>
						<div class="w-10 h-10"><FaEthereum /></div>
						<div>FaEthereum</div>
					</div>
				</a>
			</div>

			<div>
				<a href="https://paypal.me/jc9361">
					<div
						class="bg-base-300 md:hover:bg-base-200 md:hover:shadow-lg transition-all rounded-md shadow-md p-4 h-24 text-center flex justify-center items-center gap-2 text-2xl font-semibold text-neutral-content pb-2"
					>
						<div class="w-10 h-10"><FaPaypal /></div>
						<div>PayPal</div>
					</div>
				</a>
			</div>

			<div>
				<a href="https://cash.app/jc9361">
					<div
						class="bg-base-300 md:hover:bg-base-200 md:hover:shadow-lg transition-all rounded-md shadow-md p-4 h-24 text-center flex justify-center items-center gap-2 text-2xl font-semibold text-neutral-content pb-2"
					>
						<div class="w-10 h-10"><FaCommentDollar /></div>
						<div>CashApp</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</div>
