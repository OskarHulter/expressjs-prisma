//const Alpaca = require('@alpacahq/alpaca-trade-api')
import Alpaca from '@alpacahq/alpaca-trade-api'
import { CryptoBar } from '@alpacahq/alpaca-trade-api/dist/resources/datav2/entityv2'
import { getCryptoBars } from '@alpacahq/alpaca-trade-api/dist/resources/datav2/rest_v2'
import { Asset } from '@prisma/client'
import { config } from 'process'

const alpaca = new Alpaca({
  keyId: process.env.ALPACA_API_ID,
  secretKey: process.env.ALPACA_API_KEY,
  paper: true,
})

alpaca.getAccount().then((account) => {
  console.log('Current Account:', account)
})
export const assets = alpaca.getAssets({
  status: 'active',
  asset_class: ''
})// => Promise<Asset[]>

export const calendar = alpaca.getCalendar({ start: Date, end: Date })// => Promise<Calendar[]>

export const clock = alpaca.getClock()// => Promise<Clock>

const websocket = alpaca.data_stream_v2
websocket.onConnect(() => {
  websocket.subscribeForTrades(["AAPL"])
})
websocket.onStateChange((status) => {
  console.log("Status:", status)
})
websocket.onError((err) => {
  console.log("Error:", err)
})
websocket.onStockTrade((trade) => {
  console.log("Trade:", trade)
})
websocket.connect()
