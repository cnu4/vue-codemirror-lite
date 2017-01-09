var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './index.js',
  output: {
    filename: './demo/bundle.js',
    libraryTarget: 'var',
    library: 'CodeMirror',
    chunkFilename: './demo/[id].js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('dev')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, './demo'),
    compress: true,
    port: 9090
  }
}