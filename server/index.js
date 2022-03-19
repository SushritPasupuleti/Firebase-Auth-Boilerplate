const express = require('express')
const { default: helmet } = require('helmet')
const app = express()
const port = 3000

app.use(helmet)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`API Server listening on port ${port}`)
})