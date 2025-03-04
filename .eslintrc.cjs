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
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  globals: {
    ElMessageBox: true,
    ElMessage: true
  },
  rules: {
    'indent': ['error', 2, { 'SwitchCase': 1 }],          // 缩进2个空格
    'semi': ['error', 'always', { 'omitLastInOneLineBlock': true }], // 结尾分号
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }], // js定义字符串使用单引号
    'camelcase': 'error',                                 // 驼峰命名
    'comma-dangle': ['error', 'only-multiline'],          // 多行允许使用末尾逗号
    'comma-spacing': ['error', { 'before': false, 'after': true }], // 逗号后面带一个空格
    'comma-style': ['error', 'last'],                     // 逗号放置在当前行末尾
    'func-call-spacing': ['error', 'never'],              // 函数调用时括号前不带空格
    'func-style': ['error', 'declaration', { 'allowArrowFunctions': true }], // 使用函数声明定义函数
    'max-len': ['error', { 'code': 160, 'tabWidth': 2 }], // 一行最大160长度
    'new-cap': ['error', { 'capIsNew': false }],          // 构造函数
    'spaced-comment': ['error', 'always'],                // 注释斜杠后面加空格
    'object-curly-spacing': ['error', 'always'],          // 对象括号内带空格
    'no-multiple-empty-lines': ['error', { 'max': 2 }],   // 最大2空行
    'no-undef': ['error', { 'typeof': true }],            // 禁用未声明的变量
    'no-unused-vars': 'error',                            // 未使用变量
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any':'off',
    'vue/html-indent': ['error', 2, { 'alignAttributesVertically': false }],
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-vars': 'error',
  },
  overrides: [],
};