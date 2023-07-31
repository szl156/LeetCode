/*
在一条环路上有 n个加油站，其中第 i个加油站有汽油gas[i]升。
你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1个加油站需要消耗汽油cost[i]升。你从其中的一个加油站出发，开始时油箱为空。
给定两个整数数组 gas 和 cost ，如果你可以按顺序绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1 。如果存在解，则 保证 它是 唯一 的。
*/
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let start = 0, curSum = 0, totalSum = 0
    for (let i = 0; i < gas.length; i++) {
        curSum += gas[i] - cost[i]
        totalSum += gas[i] - cost[i]
        if (curSum < 0) {
            curSum = 0
            start = i + 1
        }
    }
    if (totalSum < 0) return -1
    return start
};
let gas = [2, 3, 4], cost = [3, 4, 3] // -1
console.log(canCompleteCircuit(gas, cost))