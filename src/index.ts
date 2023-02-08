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
      text: req.body.text ?? "Empty asset",
    },
  })

  return res.json(asset)
})

app.get("/assets/:id", async (req, res) => {
  const id = req.params.id
  const asset = await prisma.asset.findUnique({
    where: { id },
  })

  return res.json(asset)
})

app.put("/assets/:id", async (req, res) => {
  const id = req.params.id
  const asset = await prisma.asset.update({
    where: { id },
    data: req.body,
  })

  return res.json(asset)
})

app.delete("/assets/:id", async (req, res) => {
  const id = req.params.id
  await prisma.asset.delete({
    where: { id },
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
    GET, PUT, DELETE /assets/:id
  </pre>
  `.trim(),
  )
})

app.listen(Number(port), "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
