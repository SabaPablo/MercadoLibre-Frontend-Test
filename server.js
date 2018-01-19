const express = require('express')

const app = express()

app.use('/api', require('./api'))

app.listen(3000, () =>
  console.log(`MELI Product Search mini app is listening on port 3000 `)
)
