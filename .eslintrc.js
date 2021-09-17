module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: ['./src'],
        alias: {
          assets: './src/assets',
          hoc: './src/hoc',
          utils: './src/utils',
          hooks: './src/hooks',
          routes: './src/routes',
          public: './src/public',
          components: './src/components',
          middlewares: './src/middlewares',
          myStore: './src/myStore'
        }
      }
    }
  },
  env: {
    browser: true,
    amd: true,
    node: true
  },
  plugins: ['simple-import-sort', 'import', 'react', 'react-hooks', 'prettier'],
  extends: [
    'plugin:react-hooks/recommended',
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }],
    'no-console': 'error',
    'no-unused-vars': [
      'error',
      {
        args: 'after-used'
      }
    ],
    'object-curly-newline': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-closing-bracket-location': [
      1,
      { selfClosing: 'line-aligned', nonEmpty: 'after-props' }
    ],
    'default-case': 0,
    'react/jsx-wrap-multilines': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': [2],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ]
  }
};
