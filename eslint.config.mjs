import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from "eslint-config-prettier/flat"
import react from 'eslint-plugin-react'
import perfectionist from "eslint-plugin-perfectionist"
import tailwind from "eslint-plugin-tailwindcss";



export default tseslint.config(
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      perfectionist.configs["recommended-natural"],
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],
      ...tailwind.configs["flat/recommended"],
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      curly: 'error',
      eqeqeq: ['error', 'always'],
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-duplicate-case': 'error',
      'no-use-before-define': 'off',
      'react/display-name': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-curly-brace-presence': 'error',

      'react/jsx-sort-props': [
          'warn',
          {
              callbacksLast: true,
              ignoreCase: true,
              reservedFirst: true,
          },
      ],

      'react/no-unescaped-entities': 'off',
      'react/prop-types': 'off',
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_|React",
        },
      ],
      "perfectionist/sort-enums": [
        "warn",
        {
          partitionByComment: true,
          partitionByNewLine: true,
        },
      ],
      "perfectionist/sort-imports": [
        "warn",
        {
          internalPattern: ["^@"],
          specialCharacters: "keep",
          partitionByNewLine: true,
          newlinesBetween: 'ignore',
        },
      ],
      "perfectionist/sort-maps": [
        "warn",
        {
          partitionByComment: true,
          partitionByNewLine: true,
        },
      ],
      "perfectionist/sort-jsx-props": "off",
      "perfectionist/sort-object-types": "off",
      "perfectionist/sort-objects": "off",
    },

  },
  eslintConfigPrettier
)
