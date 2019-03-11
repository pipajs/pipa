module.exports = {
  babelrcRoots: ['examples/*'],
  overrides: [
    {
      presets: ['@babel/preset-flow'],
      test: '**/*.js',
    },
    {
      plugins: [
        'babel-plugin-typescript-strip-namespaces'
      ],
      presets: ['@babel/preset-typescript'],
      test: /\.tsx?$/,
    },
  ],
  plugins: [
    ['@babel/plugin-transform-modules-commonjs', {allowTopLevelThis: true}],
    '@babel/plugin-transform-strict-mode',
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        shippedProposals: true,
        targets: {node: 6},
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console']
    }
  }
};
