/*
给你两个字符串 start 和 target ，长度均为 n 。每个字符串 仅 由字符 'L'、'R' 和 '_' 组成，其中：
字符 'L' 和 'R' 表示片段，其中片段 'L' 只有在其左侧直接存在一个 空位 时才能向 左 移动，而片段 'R' 只有在其右侧直接存在一个 空位 时才能向 右 移动。
字符 '_' 表示可以被 任意 'L' 或 'R' 片段占据的空位。
如果在移动字符串 start 中的片段任意次之后可以得到字符串 target ，返回 true ；否则，返回 false 。
L: 左边路上不能有R R: 右边路上不能有L
*/
/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
    // 贪心算法
    let len = start.length, i = 0, j = 0
    while (i < len && j < len) {
        while (i < len && start[i] === '_') i++
        while (j < len && target[j] === '_') j++
        if (i < len && j < len) {
            if (start[i] !== target[j]) return false
            if ((start[i] === 'L' && i < j) || (start[i] === 'R' && i > j)) return false
            i++
            j++
        }
    }
    while (i < len) {
        if (start[i] !== '_') return false
        i++
    }
    while (j < len) {
        if (target[j] !== '_') return false
        j++
    }
    return true
};
// let start = "_L__R__R_", target = "L______RR" // true
let start = "R_L_", target = "__LR" // false
console.log(canChange(start, target))