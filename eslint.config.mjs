import js from '@eslint/js'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  // Include js defaults
  js.configs.recommended,

  // Convert traditional config to flat config
  ...compat.extends([
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
  ]),

  {
    languageOptions: {
      parser: (await import('@typescript-eslint/parser')).default,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': (await import('@typescript-eslint/eslint-plugin'))
        .default,
    },
    rules: {
      // Add any custom rules here
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
  // Apply override for files that need specific rules
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      // TypeScript-specific rules
    },
  },
]

export default eslintConfig
