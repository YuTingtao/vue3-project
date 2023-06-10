// 阿拉伯数字转汉字数字
export default function(num) {
  const cnNums = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  // 基本单位
  const cnIntRadice = ['', '十', '百', '千']
  // 最大处理的数字
  const maxNum = 999999999999999
  // 整数部分
  let integerNum = num.toString()

  // 输出的中文字符串
  let chineseStr = ''
  if (num === '') {
    return ''
  }
  num = parseInt(num)
  if (num >= maxNum) {
    // 超出最大处理数字
    return ''
  }
  if (num === 0) {
    chineseStr = cnNums[0]
    return chineseStr
  }

  // 获取整型部分转换
  if (num > 0) {
    let zeroCount = 0
    const IntLen = integerNum.length
    for (let i = 0; i < IntLen; i++) {
      const n = integerNum.substr(i, 1)
      const p = IntLen - i - 1
      const m = p % 4
      if (n === '0') {
        zeroCount++
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0]
        }
        // 归零
        zeroCount = 0
        // alert(cnNums[parseInt(n)])
        if (i == 0 && IntLen == 2 && n == '1') {
          chineseStr += cnIntRadice[m]
        } else {
          chineseStr += cnNums[parseInt(n)] + cnIntRadice[m]
        }
      }
    }
  }
  return chineseStr
}
