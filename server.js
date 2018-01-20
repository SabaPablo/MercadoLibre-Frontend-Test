const express = require('express')
const webpack = require('webpack')
const path = require('path')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config.js')
const compiler = webpack(config)

if (process.env.NODE_ENV !== 'production') {
  // webpack-dev-middleware for serving webpack bundle witch custom server.
  app.use(
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    })
  )

  // serves react app
  app.use(express.static(path.resolve(__dirname, 'public')))
}

app.use('/api', require('./api'))

app.listen(3000, () =>
  console.log(`MELI Product Search mini app is listening on port 3000 `)
)

module.exports = app
