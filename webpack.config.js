var path = require('path')

module.exports = {
  entry: ['./src/index.js'],
  devtool: 'inline-source-map',
  output: {
    filename: 'dist/bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
