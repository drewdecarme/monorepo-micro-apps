# Monorepo Micro Apps

## Quick points

- `app` is the main app
- `app-mfe` is a sample of what they’re trying to do. It has 2 builds, one that exposes components used in it’s app and another one that just builds it like an app to be released by itself.
- `components`, and `utils` are just libraries that expose components and hooks to be used throughout other projects

## Getting started

Clone the repo and run `npm install`. This will install all dependencies and symlink them in your root `node_modules` folder.

## Development

`cd` into each directory you want. Each directory is built using `vite` and run `npm run dev` or if you have `yarn` installed globally you can use `yarn dev`

## Building

Each package can be built using `npm run build`.

The `app-mfe` has two build scripts that are consolidated under one `npm run build` command. It will build the features and expose them to be imported in any other packages. It will also build the app as a standalone app.
