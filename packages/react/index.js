module.exports = {
  extends: [
    'plugin:react/recommended',
    '@antfu/eslint-config-ts',
  ],
  settings: {
    react: {
      version: '17.0',
    },
  },
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-single',
    ],
  },
}