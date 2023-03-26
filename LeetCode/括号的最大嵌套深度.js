// 1614
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let size = 0, ans = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            size++
            ans = Math.max(size, ans)
        } else if (s[i] === ")") size--
    }
    return ans
};
const s = "(1+(2*3)+((8)/4))+1"
console.log(maxDepth(s))
