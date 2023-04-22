// 给定非负整数数组 heights，数组中的数字用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
// 求在该柱状图中，能够勾勒出来的矩形的最大面积。
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    const stack = [-1]  // 下标栈
    let maxArea = 0    // 最大面积
    for (let i = 0; i < heights.length; i++) {
        // 栈顶柱子高于当前柱子
        while (stack[stack.length - 1] !== -1 && heights[stack[stack.length - 1]] > heights[i]) {
            // 以栈顶柱子为顶计算矩形高度
            let height = heights[stack.pop()]
            let width = i - stack[stack.length - 1] - 1
            maxArea = Math.max(maxArea, height * width)
        }
        // 当前柱子高于栈顶柱子
        stack.push(i)
    }
    while (stack[stack.length - 1] !== -1) {
        let height = heights[stack.pop()]
        let width = heights.length - stack[stack.length - 1] - 1
        maxArea = Math.max(maxArea, height * width)
    }
    return maxArea
};
let heights = [2, 1, 5, 6, 2, 3] //10
console.log(largestRectangleArea(heights))