let path = require('path')

module.exports = {
  entry: './spankbank.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ]
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },

  output: {
    filename: 'spankbank.js',
    path: path.resolve(__dirname, 'dist'),
    library: ['spankbank'],
  },

  devServer: {
    contentBase: path.join(__dirname),
    publicPath: '/dist/',
    port: 6933,
    open: true,
    openPage: 'example.html',
  }
}
