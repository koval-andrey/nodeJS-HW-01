module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonJS: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'comma-dangle': 'off',
    'space-before-function-paren': 0,
  }
}
