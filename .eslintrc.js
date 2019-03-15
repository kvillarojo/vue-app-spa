module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: 'module'
  },
  // http://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ]
}
