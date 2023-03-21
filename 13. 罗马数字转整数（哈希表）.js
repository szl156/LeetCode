// 给定一个罗马数字，将其转换成整数
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    // 哈希表
    const numberMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let sum = 0;
    for (let i = 1; i < s.length; i += 1) {
        const preNum = numberMap[s[i - 1]];
        const num = numberMap[s[i]];
        if (preNum < num) {
            sum -= preNum;
        } else {
            sum += preNum;
        }
    }
    sum += numberMap[s[s.length - 1]];
    return sum
};
