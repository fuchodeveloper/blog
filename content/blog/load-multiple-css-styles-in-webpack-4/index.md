---
path: css-styles-webpack
date: 2019-11-02T23:57:51.690Z
title: Load Multiple CSS Styles in Webpack 4
description: A dive into the world of multiple stylesheets in Webpack
---
Recently, while working on a personal project, I needed to import multiple stylesheet types and have them all bundled correctly by Webpack. Below was how I achieved it:

```js
// Supported file loaders
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
```

The most important section in the above code snippet is `/\.(sa|sc|c)ss$/`. This is a regex that optionally loads files with the following extensions: `.sass`, `.scss`, or `.css`.
