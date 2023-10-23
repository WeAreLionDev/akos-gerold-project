const config = {
  env: {
    browser: true,
    node: true,
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'prettier',
    'no-relative-import-paths',
    'testing-library',
    'eslint-plugin-jsx-a11y',
  ],
  extends: [
    'eslint:recommended',
    'plugin:testing-library/react',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:astro/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-console': 1,
    'testing-library/no-debugging-utils': 'warn',
    'testing-library/no-dom-import': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: 'req|res|next|val' }],
    'no-relative-import-paths/no-relative-import-paths': ['error', { allowSameFolder: true }],
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'react/no-unknown-property': 'off',
        'react/jsx-key': 'off',
        'react-hooks/rules-of-hooks': 'off',
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  root: true,
}

module.exports = config
