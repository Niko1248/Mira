module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  // eslint-disable-next-line prettier/prettier
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': [2, { useTabs: false }],
    'no-inline-comments': 'off',
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          ['provide', 'inject'],
          'ROUTER_GUARDS',
          'layout',
          'middleware',
          'validate',
          'scrollToTop',
          'transition',
          'loading',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'emits',
          'setup',
          'asyncData',
          'data',
          'fetch',
          'head',
          'computed',
          'watch',
          'watchQuery',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError'
        ]
      }
    ],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['vue'],
        shouldMatchCase: false
      }
    ],
    'vue/no-dupe-keys': [
      'error',
      {
        groups: []
      }
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true
      }
    ],
    'prefer-destructuring': [
      'error',
      {
        // требуется деструктуризация массивов и/или объектов.
        array: true,
        object: true
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    'import/extensions': 'off', // обеспечить согласованное использование расширения файла в пути импорта
    'import/prefer-default-export': 'off' // ESLint предпочитает экспорт по умолчанию импорт/предпочитает экспорт по умолчанию
  }
}
