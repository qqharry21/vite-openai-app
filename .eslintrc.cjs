const allExtensions = ['.ts', '.tsx', '.d.ts', '.js', '.jsx', '.json'];

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    indent: [2, 2],
    semi: [2, 'always'],
    quotes: [2, 'single'],
    'prettier/prettier': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'no-unused-vars': 'warn',
    'no-shadow': 0,
    'require-jsdoc': 0,
    'spaced-comment': 0,
    'prefer-arrow-callback': [2, { allowNamedFunctions: true }],
    'tailwindcss/classnames-order': 1, // Respect prettier-plugin-tailwindcss order
    'tailwindcss/no-custom-classname': 0, // Allow custom classnames
    '@typescript-eslint/no-non-null-assertion': 0, // Allow non-null assertions
    '@typescript-eslint/no-unused-vars': 0, // Allow unused vars
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-empty-function': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/function-component-definition': 0,
    'react/require-default-props': 0,
    'react/jsx-no-useless-fragment': 2,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.js', '.jsx', '.ts'] }], // Allow JSX in TS files
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': [
      0,
      {
        devDependencies: [
          'test/**/*',
          'tests/**/*',
          '**/__tests__/**',
          '**/*.test.{js,jsx}',
          '**/*.test.jsx',
          '**/.eslintrc.{js,json}', // eslint config
        ],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: 'tsconfig.json',
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/extensions': allExtensions,
  },
};
