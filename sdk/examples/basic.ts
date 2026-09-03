import { TikTokShop } from '../src/index'

const tiktok = new TikTokShop({
  credentials: {
    app_key: 'YOUR_APP_KEY',
    app_secret: 'YOUR_APP_SECRET',
  },
  accessToken: 'YOUR_ACCESS_TOKEN',
  shopCipher: 'ROW_...',
})

async function main() {
  // GET-style API
  const orders = await tiktok.order.getOrderList({
    page_size: 20,
    page_token: '',
    time_range_field: 'CREATE_TIME',
    sort_order: 'DESC',
  })
  console.log(orders.data)

  // POST-style API with Request Body
  await tiktok.order.addExternalOrderReferences(
    {},
    {
      orders: [{ external_order: { id: 'OMS_ID', platform: 'SHOPIFY' } }],
    },
  )
}

main().catch((e) => {
  console.error(e)
})
