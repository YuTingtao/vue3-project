/* 
 * 随机数
 */
function getRandom(num = 1000) {
    let r = Math.random();
    return Math.ceil(r * num % num);
}

export default getRandom;
