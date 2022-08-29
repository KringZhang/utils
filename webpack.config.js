const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      library: 'zksUtils',
      libraryTarget: 'umd'
  },
  devServer: {
      port: 8080,
      open: true,
      contentBase: './'
  }
}