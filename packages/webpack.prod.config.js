const path = require('path')

module.exports = {
	mode: 'production',
  entry: {
    index: './index.js',
  },
  output: {
		path: path.join(__dirname, '/dist'),
    filename: (pathData) => {
      return pathData.chunk.name === 'index' ? 'prod.inc.js' : 'vendors~index.prod.inc.js';
    },
    libraryTarget: 'this',
  },
  cache: {
    type: 'filesystem',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
};
