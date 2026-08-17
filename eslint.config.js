const { defineFlatConfig } = require('eslint-define-config');
const eslintPluginReact = require('eslint-plugin-react');
const eslintPluginReactHooks = require('eslint-plugin-react-hooks');
const eslintPluginJest = require('eslint-plugin-jest');
const eslintPluginPrettier = require('eslint-plugin-prettier');
const eslintConfigAirbnb = require('eslint-config-airbnb');
const eslintConfigAirbnbHooks = require('eslint-config-airbnb/hooks');
const eslintConfigPrettier = require('eslint-config-prettier');

const airbnbConfig = {
  rules: eslintConfigAirbnb.rules,
  settings: eslintConfigAirbnb.settings,
};

const airbnbHooksConfig = {
  rules: eslintConfigAirbnbHooks.rules,
};

const prettierConfig = {
  rules: eslintConfigPrettier.rules,
};

module.exports = defineFlatConfig([
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        fetch: 'readonly',
        console: 'readonly',
        // Add other globals if needed
      },
    },
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      jest: eslintPluginJest,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...airbnbConfig.rules,
      ...airbnbHooksConfig.rules,
      ...prettierConfig.rules,
      quotes: ['error', 'single'],
      indent: 'off',
      'no-console': 'off',
      semi: ['error', 'always'],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'prettier/prettier': [
        'error',
        {
          arrowParens: 'avoid',
          bracketSameLine: true,
          bracketSpacing: true,
          embeddedLanguageFormatting: 'auto',
          htmlWhitespaceSensitivity: 'css',
          insertPragma: false,
          jsxSingleQuote: true,
          printWidth: 80,
          proseWrap: 'preserve',
          quoteProps: 'as-needed',
          requirePragma: false,
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'es5',
          useTabs: false,
          vueIndentScriptAndStyle: false,
        },
      ],
      'jest/no-commented-out-tests': 'off',
    },
    settings: {
      ...airbnbConfig.settings,
      react: {
        version: 'detect',
      },
    },
    ignores: [
      '**/node_modules/**',
      'build/',
      'dist/',
      'public/',
      '**/*.css',
      '**/*.html',
      '**/*.json',
      '**/*.md',
      '**/__snapshots__/**',
      '**/.next/**',
      '**/.nuxt/**',
      '**/.cache/**',
      '**/build/**',
      '**/dist/**',
      '**/public/**',
    ],
  },
]);
