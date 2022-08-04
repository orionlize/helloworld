const path = require('path')

module.exports = {
	mode: 'development',
  entry: {
    index: './index.js',
  },
  output: {
		path: path.join(__dirname, '/dist'),
    filename: 'dev.inc.js',
    libraryTarget: 'this',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  watch: true
};
