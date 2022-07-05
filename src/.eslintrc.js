module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['jsdoc'],
  extends: ['eslint:recommended', 'react-app', 'react-app/jest', 'plugin:jsdoc/recommended'],
  settings: {
    jsdoc: {
      mode: 'typescript'
    }
  }
}
