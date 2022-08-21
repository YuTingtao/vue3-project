// 格式化日期
function formatDate(date, fmt = 'YYYY-MM-DD HH:mm:ss') {
    let d = date;
    if (typeof date != 'object') {
        if (typeof date == 'string') {
            date = date.replace(/-/g, '/'); // 防止苹果系统报错
        }
        d = new Date(date);
    }
    const opt = {
        'Y+': d.getFullYear().toString(),        // 年
        'M+': (d.getMonth() + 1).toString(),     // 月
        'D+': d.getDate().toString(),            // 日
        'H+': d.getHours().toString(),           // 时
        'm+': d.getMinutes().toString(),         // 分
        's+': d.getSeconds().toString()          // 秒
    };
    let ret;
    for (let key in opt) {
        ret = new RegExp('('+ key +')').exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[key]) : (opt[key].padStart(ret[1].length, '0')))
        }
    }
    return fmt;
}

export default formatDate;
