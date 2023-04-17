// 请根据每日 气温 列表 temperatures，重新生成一个列表，要求其对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。
// 如果气温在这之后都不会升高，请在该位置用0 来代替。
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    // 非单调栈(动态规划)
    const res = new Array(temperatures.length).fill(0)
    for (let i = temperatures.length - 2; i >= 0; i--) {
        let next = i + 1
        while (temperatures[i] >= temperatures[next]) {
            if (res[next] === 0) {
                next = i
                break
            }
            next += res[next]
        }
        res[i] = next - i
    }
    return res

    // 单调栈
/*    const ans = new Array(temperatures.length)
    const stack = []
    for (let i = temperatures.length - 1; i >= 0; i--) {
        while (stack.length && temperatures[stack[stack.length - 1]] <= temperatures[i]) stack.pop()
        ans[i] = stack.length ? stack[stack.length - 1] - i : 0
        stack.push(i)
    }
    return ans*/
}
let temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
console.log(dailyTemperatures(temperatures))