import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
  try {
    const [btc_res, fear_res] = await Promise.all([
      fetch('https://api.blockchain.com/v3/exchange/tickers/BTC-USD'),
      fetch('https://api.alternative.me/fng/?limit=1')
    ]);

    const [btc, fear] = await Promise.all([
      btc_res.json(),
      fear_res.json()
    ]);

    const { price_24h: yesterday, last_trade_price: today, volume_24h: volume } = btc;

    return { btc, today, yesterday, volume, fear };
  } catch (error) {
    // Handle errors appropriately
    console.error('An error occurred:', error);
    throw error;
  }
}) satisfies PageLoad;
