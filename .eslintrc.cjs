module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  plugins: ['react-hooks', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:tailwindcss/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: process.cwd(),
  },
  rules: {
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: true,
        memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
        allowSeparatedGroups: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/no-unknown-property': 'off',
    'tailwindcss/no-custom-classname': 'off',
  },
  ignorePatterns: ['*.cjs'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],
}
