/*
  Warnings:

  - You are about to drop the `Todo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Todo";

-- CreateTable
CREATE TABLE "Candlestick" (
    "timestamp" BIGINT NOT NULL,
    "close" DOUBLE PRECISION NOT NULL,
    "high" DOUBLE PRECISION,
    "low" DOUBLE PRECISION,
    "open" DOUBLE PRECISION,
    "volume" DOUBLE PRECISION,
    "vwap" DOUBLE PRECISION,
    "transactions" INTEGER,
    "ticker" VARCHAR(25) NOT NULL,

    CONSTRAINT "Candlestick_pkey" PRIMARY KEY ("timestamp","ticker")
);

-- CreateTable
CREATE TABLE "Asset" (
    "ticker" VARCHAR(25) NOT NULL,
    "exchange" VARCHAR(25),
    "description" VARCHAR(200),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "tags" TEXT[],

    CONSTRAINT "Asset_pkey" PRIMARY KEY ("ticker")
);

-- CreateTable
CREATE TABLE "Category" (
    "name" VARCHAR(25) NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "Category_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL,
    "firstName" VARCHAR(30) NOT NULL,
    "lastName" VARCHAR(30) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("email","firstName","lastName")
);

-- CreateTable
CREATE TABLE "_AssetToCategory" (
    "A" VARCHAR(25) NOT NULL,
    "B" VARCHAR(25) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_AssetToCategory_AB_unique" ON "_AssetToCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_AssetToCategory_B_index" ON "_AssetToCategory"("B");

-- AddForeignKey
ALTER TABLE "Candlestick" ADD CONSTRAINT "Candlestick_ticker_fkey" FOREIGN KEY ("ticker") REFERENCES "Asset"("ticker") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssetToCategory" ADD CONSTRAINT "_AssetToCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Asset"("ticker") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssetToCategory" ADD CONSTRAINT "_AssetToCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "Category"("name") ON DELETE CASCADE ON UPDATE CASCADE;
