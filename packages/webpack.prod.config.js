const path = require('path')

module.exports = {
	mode: 'production',
  entry: {
    index: './index.js',
  },
  output: {
		path: path.join(__dirname, '/dist'),
    filename: 'prod.inc.js',
    libraryTarget: 'this',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
};
