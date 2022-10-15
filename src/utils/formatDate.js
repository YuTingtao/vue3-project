/*
 * date: 字符串、时间戳、日期对象
 * fmt: 日期格式，默认'YYYY-MM-DD HH:mm:ss'
 */
function formatDate(date, fmt = 'YYYY-MM-DD HH:mm:ss') {
    if (!date) {
        return ''
    }
    if (typeof date === 'object' && !(date instanceof Date)) {
        return ''
    }
    if (typeof date == 'string') {
        // 防止苹果系统报错
        date = date.replace(/-/g, '/')
    }
    if (!(date instanceof Date)) {
        date = new Date(date)
    }
    // 补零函数
    function padZero(num) {
        return num < 10 ? ('0' + num) : num
    }
    // 年月日时分秒
    var opt = {
        'Y+': date.getFullYear(),
        'M+': padZero((date.getMonth() + 1)),
        'D+': padZero(date.getDate()),
        'H+': padZero(date.getHours()),
        'm+': padZero(date.getMinutes()),
        's+': padZero(date.getSeconds())
    }
    var regRes
    for (var key in opt) {
        regRes = new RegExp(key).exec(fmt)
        if (regRes) {
            fmt = fmt.replace(regRes[0], opt[key])
        }
    }
    return fmt
}

export default formatDate
