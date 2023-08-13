/*给你一个整数数组 arr ，请你删除一个子数组（可以为空），使得 arr 中剩下的元素是 非递减 的。
一个子数组指的是原数组中连续的一个子序列。
请你返回满足题目要求的最短子数组的长度。*/
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function (arr) {
	let n = arr.length, j = n - 1;
	while (j > 0 && arr[j - 1] <= arr[j]) {
		j--;
	}
	if (j === 0) {
		return 0;
	}
	let res = j;
	for (let i = 0; i < n; i++) {
		while (j < n && arr[j] < arr[i]) {
			j++;
		}
		res = Math.min(res, j - i - 1);
		if (i + 1 < n && arr[i] > arr[i + 1]) {
			break;
		}
	}
	return res;
};
let arr = [1, 2, 3, 10, 4, 2, 3, 5] // 3
console.log(findLengthOfShortestSubarray(arr))