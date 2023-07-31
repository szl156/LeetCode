/*
一个 平方和三元组 (a,b,c) 指的是满足 a2 + b2 = c2 的 整数 三元组 a，b 和 c 。
给你一个整数 n ，请你返回满足 1 <= a, b, c <= n 的 平方和三元组 的数目。*/
/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
	let count = 0
	for (let i = 1; i < n; i++) {
		for (let j = 1; j < n; j++) {
			let x = Math.pow(i ** 2 + j ** 2, 0.5)
			if (x <= n && Number.isInteger(x)) count++
		}
	}
	return count
};
let n = 10 // 2
console.log(countTriples(n))