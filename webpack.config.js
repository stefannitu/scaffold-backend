const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/server.ts',
  output: {
    filename: 'bundle.server.js',
  },
  devtool: false,
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }],
  },
};
