const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    path: path.resolve(__dirname, 'bin'),
    filename: 'server.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: './bin',
    hot: true
  },
  target: 'node',
  externals: nodeExternals(),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'production'`
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }]
      },
      {
        test: /\.scss$/,
        loader: 'ignore-loader'
      },
      {
        test: /\.css$/,
        loader: 'ignore-loader'
      },
    ]
  },
};
