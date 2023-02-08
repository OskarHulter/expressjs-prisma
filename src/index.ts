import { PrismaClient } from '@prisma/client'
import express from "express"
const ccxt = require('ccxt')
let kraken = new ccxt.kraken()
let bitfinex = new ccxt.bitfinex({ verbose: true })
let huobipro = new ccxt.huobipro()
const prisma = new PrismaClient()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.raw({ type: "application/vnd.custom-type" }))
app.use(express.text({ type: "text/html" }))

app.get("/sync", async (req, res) => {
  console.log(kraken.id, await kraken.loadMarkets())
  console.log(bitfinex.id, await bitfinex.loadMarkets())
  console.log(huobipro.id, await huobipro.loadMarkets())

  console.log(kraken.id, await kraken.fetchOrderBook(kraken.symbols[0]))
  console.log(bitfinex.id, await bitfinex.fetchTicker('BTC/USD'))
  console.log(huobipro.id, await huobipro.fetchTrades('ETH/USDT'))
  console.log(req.body)
  return res.json(req.body)
})

app.post("/sync", async (req, res) => {
  // const asset = await prisma.asset.create({
  //   data: {
  //     ...req.body
  //   },
  // })
  console.log(req.body)
  return res.json(req.body)
})

app.get("/assets", async (req, res) => {
  const assets = await prisma.asset.findMany({
    orderBy: { createdAt: "desc" },
  })

  res.json(assets)
})

app.post("/assets", async (req, res) => {
  const asset = await prisma.asset.create({
    data: {
      ...req.body
    },
  })

  return res.json(asset)
})

app.get("/assets/:ticker", async (req, res) => {
  const ticker = req.params.ticker
  const asset = await prisma.asset.findUnique({
    where: { ticker },
  })

  return res.json(asset)
})

app.put("/assets/:ticker", async (req, res) => {
  const ticker = req.params.ticker
  const asset = await prisma.asset.update({
    where: { ticker },
    data: req.body,
  })

  return res.json(asset)
})

app.delete("/assets/:ticker", async (req, res) => {
  const ticker = req.params.ticker
  await prisma.asset.delete({
    where: { ticker },
  })

  return res.send({ status: "ok" })
})

app.get("/", async (req, res) => {
  res.send(
    `
  <h1>asset REST API</h1>
  <h2>Available Routes</h2>
  <pre>
    GET, POST /assets
    GET, PUT, DELETE /assets/:ticker
  </pre>
  `.trim(),
  )
})

app.listen(Number(port), "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
