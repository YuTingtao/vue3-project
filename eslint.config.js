import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  {
    globals: {
      ...globals.node,
      ...globals.es6,
      ...globals.vue,
    }
  },
  {
    rules: {
      'indent': ['error', 2, { 'SwitchCase': 1 }],          // 缩进2个空格
      'semi': ['error', 'never'],                           // 结尾不加分号
      'quotes': ['error', 'single', { 'allowTemplateLiterals': true }], // js定义字符串使用单引号
      'comma-dangle': ['error', 'only-multiline'],          // 多行允许使用末尾逗号
      'comma-spacing': ['error', { 'before': false, 'after': true }], // 逗号后面带一个空格
      'comma-style': ['error', 'last'],                     // 逗号放置在当前行末尾
      'camelcase': 'error',                                 // 驼峰命名
      'func-call-spacing': ['error', 'never'],              // 函数调用时括号前不带空格
      'func-style': ['error', 'declaration', { 'allowArrowFunctions': true }], // 使用函数声明定义函数
      'max-len': ['error', { 'code': 160, 'tabWidth': 2 }], // 一行最大160长度
      'new-cap': ['error', { 'capIsNew': false }],          // 构造函数
      'spaced-comment': ['error', 'always'],                // 注释斜杠后面加空格
      'object-curly-spacing': ['error', 'always'],          // 对象括号内带空格
      'no-multiple-empty-lines': ['error', { 'max': 2 }],   // 最大2空行
      'no-undef': ['error', { 'typeof': true }],            // 禁用未声明的变量
      'no-unused-vars': 'off',                              // 未使用变量
      'no-prototype-builtins': 'off',                       // 禁止在对象上调用 Object.prototype 方法
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/html-indent': ['error', 2, { 'alignAttributesVertically': false }],
      'vue/multi-word-component-names': 'off',
      'vue/no-unused-vars': 'off',
    },
  },
  {
    ignores: ['node_modules/', 'dist/', 'docs/']
  }
]