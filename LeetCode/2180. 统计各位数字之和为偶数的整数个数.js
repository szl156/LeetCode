/*
给你一个正整数 num ，请你统计并返回 小于或等于 num 且各位数字之和为 偶数 的正整数的数目。
正整数的 各位数字之和 是其所有位上的对应数字相加的结果。
*/

/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
    // 位运算
    return num - parseInt(num, 11) % 2 >> 1
    // 数学方法
    /*let y = Math.floor(num / 10), x = num % 10;
    let res = y * 5, ySum = 0;
    while (y !== 0) {
        ySum += y % 10;
        y = Math.floor(y / 10);
    }
    if (ySum % 2 === 0) {
    // 若剩余偶数
        res += Math.floor(x / 2) + 1;
    } else {
    // 若剩余奇数
        res += Math.floor((x + 1) / 2);
    }
    return res - 1;*/
};
let num = 30
console.log(countEven(num)) //14