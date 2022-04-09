function formatDate(date, fmt = 'yyyy-MM-dd HH:mm:ss') {
    const opt = {
        'y+': date.getFullYear().toString(),        // 年
        'M+': (date.getMonth() + 1).toString(),     // 月
        'd+': date.getDate().toString(),            // 日
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
