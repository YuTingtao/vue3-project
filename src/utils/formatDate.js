function formatDate(date, fmt = 'YYYY-MM-DD HH:mm:ss') {
    if (typeof(date) != 'Object') {
        date = new Date(date);
    }
    const opt = {
        'Y+': date.getFullYear().toString(),        // 年
        'M+': (date.getMonth() + 1).toString(),     // 月
        'D+': date.getDate().toString(),            // 日
        'H+': date.getHours().toString(),           // 时
        'm+': date.getMinutes().toString(),         // 分
        's+': date.getSeconds().toString()          // 秒
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
