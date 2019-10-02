var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'passphraseGeneratorHR.js',
    publicPath: '/',
    library: 'passphraseGeneratorHR',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css']
  },
  context: __dirname,
  target: 'web',
  serve: {
    port: 1337,
    content: './dist'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
