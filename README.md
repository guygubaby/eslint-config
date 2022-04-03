# My eslint config presets

## brife intro

This is my eslint config presets

## eslint presets list

- **for basic js** @bryce-loskie/eslint-config-basic
- **for typescript** @bryce-loskie/eslint-config-ts
- **for vue** @bryce-loskie/eslint-config-vue
- **for react** @bryce-loskie/eslint-config-react
- **for vue&react** @bryce-loskie/eslint-config

## usage

```bash
yarn add @bryce-loskie/eslint-config[-type] eslint -D
```

```ts
// .eslintrc.js
module.exports = {
  extends: [
    '@bryce-loskie/eslint-config[-type]', // set your type here ❤
  ],
}
```

## Tips

pnpm publish workspace:

```bash
pnpm -r publish packges --access public
```
