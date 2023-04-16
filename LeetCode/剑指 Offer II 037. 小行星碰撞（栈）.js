// 给定一个整数数组 asteroids，表示在同一行的小行星。
// 对于数组中的每一个元素，其绝对值表示小行星的大小，正负表示小行星的移动方向（正表示向右移动，负表示向左移动）。
// 每一颗小行星以相同的速度移动。找出碰撞后剩下的所有小行星。
// 碰撞规则：两个行星相互碰撞，较小的行星会爆炸。如果两颗行星大小相同，则两颗行星都会爆炸。两颗移动方向相同的行星，永远不会发生碰撞。

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let stack = []
    for (const el of asteroids) {
        while (stack.length && stack[stack.length - 1] !== null && stack[stack.length - 1] > 0 && stack[stack.length - 1] < -el) stack.pop()
        if (el === -stack[stack.length - 1] && el < 0 && stack.length) stack.pop(); else if (el > 0 || !stack.length || stack[stack.length - 1] < 0) stack.push(el)
    }
    return stack
};
let asteroids = [5, 10, 3, -5] // [5,10]
// let asteroids = [-2, -2, 1, -2] //[-2,-2,-2]
console.log(asteroidCollision(asteroids))