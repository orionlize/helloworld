const path = require('path')

module.exports = {
	mode: 'production',
  entry: {
    index: './index.js',
  },
  output: {
		path: path.join(__dirname, '/dist'),
    filename: (pathData) => {
      return pathData.chunk.name === 'index' ? 'dev.inc.js' : 'vendors~index.dev.inc.js';
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
