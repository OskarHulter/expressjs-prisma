import { PrismaClient } from '@prisma/client'
import express from "express"

const prisma = new PrismaClient()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.raw({ type: "application/vnd.custom-type" }))
app.use(express.text({ type: "text/html" }))

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
