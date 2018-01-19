module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true
  },
  parserOptions: {
    ecmaVersion: 2017
  },
  extends: 'plugin:prettier/recommended',
  rules: {
    'no-unused-vars': 'error'
  }
}
