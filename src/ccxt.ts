'use strict'
const ccxt = require('ccxt')

  (async function () {
    let kraken = new ccxt.kraken()
    let bitfinex = new ccxt.bitfinex({ verbose: true })
    let huobipro = new ccxt.huobipro()

    console.log(kraken.id, await kraken.loadMarkets())
    console.log(bitfinex.id, await bitfinex.loadMarkets())
    console.log(huobipro.id, await huobipro.loadMarkets())

    console.log(kraken.id, await kraken.fetchOrderBook(kraken.symbols[0]))
    console.log(bitfinex.id, await bitfinex.fetchTicker('BTC/USD'))
    console.log(huobipro.id, await huobipro.fetchTrades('ETH/USDT'))

  })()
