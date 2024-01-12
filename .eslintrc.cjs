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
  plugins: ['prettier', '@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
  },
  // rules: {
  //   'import/order': [
  //     'error',
  //     {
  //       groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
  //       pathGroups: [
  //         {
  //           pattern: 'angular',
  //           group: 'external',
  //           position: 'before',
  //         },
  //       ],
  //       alphabetize: {
  //         order: 'asc',
  //         caseInsensitive: true,
  //       },
  //       'newlines-between': 'always',
  //     },
  //   ],
  // },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
