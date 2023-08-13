/*
电影院的观影厅中有 n 行座位，行编号从 1 到 n ，且每一行内总共有 10 个座位，列编号从 1 到 10 。
给你数组 reservedSeats ，包含所有已经被预约了的座位。比如说，researvedSeats[i]=[3,8] ，它表示第 3 行第 8 个座位被预约了。
请你返回 最多能安排多少个 4 人家庭 。4 人家庭要占据 同一行内连续 的 4 个座位。隔着过道的座位（比方说 [3,3] 和 [3,4]）不是连续的座位，
但是如果你可以将 4 人家庭拆成过道两边各坐 2 人，这样子是允许的。*/
/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function (n, reservedSeats) {
	const left = 0b11110000;
	const middle = 0b11000011;
	const right = 0b00001111;
	let ans = n * 2;
	let map = new Map();
	for (let [row, pos] of reservedSeats) {
		if (pos >= 2 && pos <= 9) {
			if (!map.has(row)) map.set(row, 0);
			map.set(row, (map.get(row) | (1 << (pos - 2))));
		}
	}
	for (let b of map.values()) {
		ans -= 2;
		if ((left | b) === left || (middle | b) === middle || (right | b) === right) {
			ans++;
		}

	}
	return ans;
};
let n = 3, reservedSeats = [[1, 2], [1, 3], [1, 8], [2, 6], [3, 1], [3, 10]] // 4
console.log(maxNumberOfFamilies(n, reservedSeats))