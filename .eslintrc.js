module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    './.eslintrc-auto-import.json'
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
    'indent': ['error', 2, { 'SwitchCase': 1 }],          // 缩进2个空格
    'vue/html-indent': ['error', 2],
    'semi': ['error', 'never'],                           // js结尾不加分号
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }], // js定义字符串使用单引号
    'camelcase': 'error',                                 // 驼峰命名
    'comma-dangle': ['error', 'only-multiline'],          // 多行允许使用末尾逗号
    'comma-spacing': ['error', { 'before': false, 'after': true }], // 逗号后面带一个空格
    'comma-style': ['error', 'last'],                     // 逗号放置在当前行末尾
    'func-call-spacing': ['error', 'never'],              // 函数调用时括号前不带空格
    'func-style': ['error', 'declaration', { 'allowArrowFunctions': true }], // 使用函数声明定义函数
    'max-len': ['error', { 'code': 120, 'tabWidth': 2 }], // 一行最大120长度
    'new-cap': ['error', { 'capIsNew': true }],           // 构造函数名首字母大写
    'spaced-comment': ['error', 'always'],                // 注释斜杠后面加空格
    'object-curly-spacing': ['error', 'always'],          // 对象括号内带空格
    'no-multiple-empty-lines': ['error', { 'max': 2 }],   // 最大2空行
    'no-undef': ['error', { 'typeof': true }],            // 禁用未声明的变量
    'no-unused-vars': 'off',                              // 未使用变量不报错
    'vue/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
