module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended'
    ],
    overrides: [],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'indent': ['error', 4],
        'max-len': [
            'error',
            {
                'code': 120,
                'tabWidth': 4
            }
        ],
        'semi': ['error', 'never'],
        'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
        'no-unused-vars': 'off',
        'object-curly-spacing': ['error', 'always'],
        'vue/multi-word-component-names': 'off'
    }
}
