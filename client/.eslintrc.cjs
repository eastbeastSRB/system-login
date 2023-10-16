module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}


// module.exports = {
//   root: true,
//   env: { browser: true, es2021: true },
//   extends: [
//     // 'airbnb',
//     // 'airbnb/hooks',
//     // 'airbnb-typescript',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react-hooks/recommended',
//     'eslint:recommended'
//   ],
//   // parserOptions: {
//   //   project: './tsconfig.json',
//   // },
//   ignorePatterns: ['dist', '.eslintrc.cjs'],
//   parser: '@typescript-eslint/parser',
//   plugins: [
//     'react-refresh',
//     // 'react',
//     // '@typescript-eslint'
//   ],
//   rules: {
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true },
//     ],
//   },
// }
