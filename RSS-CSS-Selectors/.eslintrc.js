module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'airbnb-base',
      'airbnb-typescript/base',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json',
    },
    plugins: ['prettier', '@typescript-eslint'],
    root: true,
    rules: {
      "class-methods-use-this": ["error", { "exceptMethods": [createView] }],
      "@typescript-eslint/no-unused-vars": "off",
      'import/extensions': 'off',
      'prettier/prettier': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
          overrides: {
            accessors: 'explicit',
            constructors: 'off',
            methods: 'explicit',
            properties: 'explicit',
            parameterProperties: 'explicit',
          },
        },
      ],
      'max-lines-per-function': ['error', 50],
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
    },
  };
