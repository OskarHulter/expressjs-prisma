const finnhub = require('finnhub')

const api_key = finnhub.ApiClient.instance.authentications['api_key']
api_key.apiKey = "<API_key>" // Replace this
const finnhubClient = new finnhub.DefaultApi()

// Stock candles
finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, (error, data, response) => {
  console.log(data)
})

// Crypto candles
finnhubClient.cryptoCandles("BINANCE:BTCUSDT", "D", 1590988249, 1591852249, (error, data, response) => {
  console.log(data)
})

// Crypto exchanges
finnhubClient.cryptoExchanges((error, data, response) => {
  console.log(data)
})

//Crypto symbols
finnhubClient.cryptoSymbols("BINANCE", (error, data, response) => {
  console.log(data)
})

// Earnings calendar
finnhubClient.earningsCalendar({ "from": "2020-06-01", "to": "2020-06-30" }, (error, data, response) => {
  console.log(data)
})

// Economic code
finnhubClient.economicCode((error, data, response) => {
  console.log(data)
})

// Economic data
finnhubClient.economicData("MA-USA-656880", (error, data, response) => {
  console.log(data)
})

// Filings
finnhubClient.filings({ "symbol": "AAPL" }, (error, data, response) => {
  console.log(data)
})

//Financials
finnhubClient.financials("AAPL", "ic", "annual", (error, data, response) => {
  console.log(data)
})

// Financials Reported
finnhubClient.financialsReported({ "symbol": "AAPL" }, (error, data, response) => {
  console.log(data)
})

// Forex candles
finnhubClient.forexCandles("OANDA:EUR_USD", "D", 1590988249, 1591852249, (error, data, response) => {
  console.log(data)
})

// Forex exchanges
finnhubClient.forexExchanges((error, data, response) => {
  console.log(data)
})

// Forex rates
finnhubClient.forexRates({ "base": "USD" }, (error, data, response) => {
  console.log(data)
})

// Forex symbols
finnhubClient.forexSymbols("OANDA", (error, data, response) => {
  console.log(data)
})

// General news
finnhubClient.marketNews("general", {}, (error, data, response) => {
  console.log(data)
})

//Major development
finnhubClient.pressReleases("AAPL", {}, (error, data, response) => {
  console.log(data)
})

// News sentiment
finnhubClient.newsSentiment("AAPL", (error, data, response) => {
  console.log(data)
})

// Pattern recognition
finnhubClient.patternRecognition("AAPL", "D", (error, data, response) => {
  console.log(data)
})

// Price target
finnhubClient.priceTarget("AAPL", (error, data, response) => {
  console.log(data)
})

//Quote
finnhubClient.quote("AAPL", (error, data, response) => {
  console.log(data)
})


// Stock symbols
finnhubClient.stockSymbols("US", (error, data, response) => {
  console.log(data)
})

// Support resistance
finnhubClient.supportResistance("AAPL", "D", (error, data, response) => {
  console.log(data)
})

// Technical indicator
finnhubClient.technicalIndicator("AAPL", "D", 1580988249, 1591852249, "macd", {}, (error, data, response) => {
  console.log(data)
})

// Transcripts
finnhubClient.transcripts("AAPL_162777", (error, data, response) => {
  console.log(data)
})

// Tick Data
finnhubClient.stockTick("AAPL", "2020-03-25", 500, 0, (error, data, response) => {
  console.log(data)
})

// Indices Constituents
finnhubClient.indicesConstituents("^GSPC", (error, data, response) => {
  console.log(data)
})

// Indices Historical Constituents
finnhubClient.indicesHistoricalConstituents("^GSPC", (error, data, response) => {
  console.log(data)
})

// Insider Transactions
finnhubClient.insiderTransactions('AAPL', (error, data, response) => {
  console.log(data)
})

// Revenue Breakdown
finnhubClient.revenueBreakdown({ 'symbol': 'AAPL' }, (error, data, response) => {
  console.log(data)
})

// Social Sentiment
finnhubClient.socialSentiment('GME', (error, data, response) => {
  console.log(data)
})

// Investment Theme
finnhubClient.investmentThemes('financialExchangesData', (error, data, response) => {
  console.log(data)
})

// Supply Chain
finnhubClient.supplyChainRelationships('AAPL', (error, data, response) => {
  console.log(data)
})

// Company ESG
finnhubClient.companyEsgScore('AAPL', (error, data, response) => {
  console.log(data)
})

// Company Earnings Quality Score
finnhubClient.companyEarningsQualityScore('AAPL', 'quarterly', (error, data, response) => {
  console.log(data)
})

// Crypto Profile
finnhubClient.cryptoProfile('BTC', (error, data, response) => {
  console.log(data)
})
