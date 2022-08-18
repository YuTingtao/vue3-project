/*
 * 格式化时间，大于3天显示日期
 */
function formatTime(date) {
    let d = date;
    if (typeof date != 'object') {
        if (typeof date == 'string') {
            date = date.replace(/-/g, '/'); // 防止苹果系统报错
        }
        d = new Date(date);
    }
    const now = Date.now();
    const diff = (now - d) / 1000;

    if (diff < 60) {
        return '刚刚'
    } else if (diff < 3600) {
        return Math.ceil(diff / 60) + '分钟前';
    } else if (diff < 3600 * 24) {
        return Math.ceil(diff / 3600) + '小时前';
    } else if (diff < 3600 * 24 * 2) {
        return '1天前';
    } else if (diff < 3600 * 24 * 3) {
        return '2天前';
    } else if (diff < 3600 * 24 * 4) {
        return '3天前';
    } else {
        let fmt = 'yyyy-MM-dd HH:mm:ss';
        const opt = {
            'y+': d.getFullYear().toString(),        // 年
            'M+': (d.getMonth() + 1).toString(),     // 月
            'd+': d.getDate().toString(),            // 日
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
}

export default formatTime;
