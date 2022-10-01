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
        'indent': ['error', 4],                               // 缩进4个空格
        'vue/html-indent': ['error', 4],
        'max-len': ['error', { 'code': 100, 'tabWidth': 4 }], // 一行最大100长度
        'semi': ['error', 'never'],                           // js结尾不加分号
        'quotes': ['error', 'single', { 'allowTemplateLiterals': true }], // js单引号
        'camelcase': 'error',                                 // 驼峰命名
        'comma-dangle': ['error', 'never'],                   // 禁止使用拖尾逗号
        'comma-spacing': ['error', { 'before': false, 'after': true }], // 逗号后面带一个空格
        'object-curly-spacing': ['error', 'always'],          // 对象括号内带空格
        'no-multiple-empty-lines': ['error', { 'max': 2 }],   // 最大2空行
        'no-unused-vars': 'off',                              // 未使用变量不报错
        'vue/no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'vue/multi-word-component-names': 'off'
    }
}
