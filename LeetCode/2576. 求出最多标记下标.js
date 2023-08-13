/*给你一个下标从 0 开始的整数数组 nums 。
一开始，所有下标都没有被标记。你可以执行以下操作任意次：
选择两个 互不相同且未标记 的下标 i 和 j ，满足 2 * nums[i] <= nums[j] ，标记下标 i 和 j 。
请你执行上述操作任意次，返回 nums 中最多可以标记的下标数目。*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxNumOfMarkedIndices = function (nums) {
	nums.sort((a, b) => a - b);
	let res = 0;
	const n = nums.length;
	const mid = n >> 1;
	let left = 0;
	let right = mid;
	while (left < mid && right < n) {
		if (2 * nums[left] <= nums[right]) {
			left++;
			right++;
			res += 2;
		} else {
			right++;
		}
	}
	return res;
};
// let nums = [1,
// 	78,
// 	27,
// 	48,
// 	14,
// 	86,
// 	79,
// 	68,
// 	77,
// 	20,
// 	57,
// 	21,
// 	18,
// 	67,
// 	5,
// 	51,
// 	70,
// 	85,
// 	47,
// 	56,
// 	22,
// 	79,
// 	41,
// 	8,
// 	39,
// 	81,
// 	59,
// 	74,
// 	14,
// 	45,
// 	49,
// 	15,
// 	10,
// 	28,
// 	16,
// 	77,
// 	22,
// 	65,
// 	8,
// 	36,
// 	79,
// 	94,
// 	44,
// 	80,
// 	72,
// 	8,
// 	96,
// 	78,
// 	39,
// 	92,
// 	69,
// 	55,
// 	9,
// 	44,
// 	26,
// 	76,
// 	40,
// 	77,
// 	16,
// 	69,
// 	40,
// 	64,
// 	12,
// 	48,
// 	66,
// 	7,
// 	59,
// 	10] // 64
let nums = [9, 2, 5, 4] // 4
console.log(maxNumOfMarkedIndices(nums))