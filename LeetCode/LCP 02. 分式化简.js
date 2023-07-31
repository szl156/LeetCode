/*
输入的cont代表连分数的系数（cont[0]代表上图的a0，以此类推）。
返回一个长度为2的数组[n, m]，使得连分数的值等于n / m，且n, m最大公约数为1。
*/
/**
 * @param {number[]} cont
 * @return {number[]}
 */
var fraction = function (cont) {
	// 递归
	if (cont.length <= 1) return [cont[0], 1]
	const iterate = (cont, fz, fm) => {
		const addition = cont.pop()
		fz += fm * addition
		if (cont.length < 1) return [fz, fm]

		return iterate(cont, fm, fz)
	}
	return iterate(cont, 1, cont.pop())

	// 迭代
	/*const len = cont.length
	if (len <= 1) return [cont[0], 1]
	let fz = 1, fm = cont[len - 1]
	for (let i = len - 2; i > 0; i--) {
		fz += cont[i] * fm;
		[fz, fm] = [fm, fz]
	}
	return [fz + cont[0] * fm, fm]*/
}
const cont = [3, 2, 0, 2] // [13,4]
// const cont = [0, 0, 3] // [3,1]
console.log(fraction(cont))