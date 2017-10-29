module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactPageScroller',
      externals: {
        react: 'React'
      }
    }
  }
};
