# My eslint config presets

## brief intro

This is my eslint config presets

## usage

```bash
pnpm i @bryce-loskie/eslint-config eslint -D
```

```ts
// .eslintrc.js
module.exports = {
  extends: [
    '@bryce-loskie',
  ],
}
```

## Tips

pnpm publish workspace:

```bash
pnpm -r publish packages/* --access public
```
