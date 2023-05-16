/*
现有一台饮水机，可以制备冷水、温水和热水。每秒钟，可以装满 2 杯 不同 类型的水或者 1 杯任意类型的水。
给你一个下标从 0 开始、长度为 3 的整数数组 amount ，其中 amount[0]、amount[1] 和 amount[2] 分别表示需要装满冷水、温水和热水的杯子数量。
返回装满所有杯子所需的 最少 秒数。
*/
/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
    let time = 0
    amount.sort((a, b) => a - b)
    time += amount[1]

    if (amount[0] > amount[2] - amount[1]) {
        time += amount[2] - amount[1]
        time += Math.ceil((amount[0] - amount[2] + amount[1]) / 2)
    } else {
        time += amount[0]
        time += amount[2] - amount[1] - amount[0]
    }
    return time
};
let amount = [5, 4, 4]
console.log(fillCups(amount)) // 7