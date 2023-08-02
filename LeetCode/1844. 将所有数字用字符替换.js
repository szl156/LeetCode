/*给你一个下标从 0 开始的字符串 s ，它的 偶数 下标处为小写英文字母，奇数 下标处为数字。
定义一个函数 shift(c, x) ，其中 c 是一个字符且 x 是一个数字，函数返回字母表中 c 后面第 x 个字符。
比方说，shift('a', 5) = 'f' 和 shift('x', 0) = 'x' 。
对于每个 奇数 下标 i ，你需要将数字 s[i] 用 shift(s[i-1], s[i]) 替换。
请你替换所有数字以后，将字符串 s 返回。题目 保证 shift(s[i-1], s[i]) 不会超过 'z' 。
 */
/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
	const ans = []
	for (let i = 0; i < s.length; i++) {
		if (!Number.isNaN(parseInt(s[i]))) {
			const cCode = s[i - 1].charCodeAt(0)
			ans.push(String.fromCharCode(cCode + 1))
		} else {
			ans.push(s[i])
		}
	}
	return ans.join('')
};
let s = "a1c1e1" // "abcdef"
console.log(replaceDigits(s))