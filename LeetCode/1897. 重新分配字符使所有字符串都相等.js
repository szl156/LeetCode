/*给你一个字符串数组 words（下标 从 0 开始 计数）。
在一步操作中，需先选出两个 不同 下标 i 和 j，其中 words[i] 是一个非空字符串，接着将 words[i] 中的 任一 字符移动到 words[j] 中的 任一 位置上。
如果执行任意步操作可以使 words 中的每个字符串都相等，返回 true ；否则，返回 false 。
 */
/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
	const map = new Map()
	for (let i = 0; i < words.length; i++) {
		for (let j = 0; j < words[i].length; j++) {
			const c = words[i][j]
			map.set(c, map.get(c) ? map.get(c) + 1 : 1)
		}
	}
	for (const mapElement of map) {
		if (mapElement[1] % words.length !== 0) return false
	}
	return true
};
let words = ["abc", "aabc", "bc"] // true
console.log(makeEqual(words))