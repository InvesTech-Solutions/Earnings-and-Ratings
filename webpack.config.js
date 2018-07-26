var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src/components');
var DIST_DIR = path.join(__dirname, '/client/dist');


module.exports = {
  target: 'node',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    rules : [
      {
        test : /\.js|.jsx$/,
        exclude: /node_modules/,
        include : SRC_DIR,
        loader: 'babel-loader',

        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};