/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  babel: {
    plugins: ['@emotion'],
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
};
