module.exports = {
  entry: './asteroids.js',
  output: {
    path: __dirname,
    filename: './bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint-loader'

      }
    ],
    loaders: [
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  jshint: {
    esversion: 6
  }
};
