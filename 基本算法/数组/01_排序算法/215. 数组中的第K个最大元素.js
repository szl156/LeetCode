/*
给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    // 库函数法
    // return nums.sort((a, b) => b - a)[k - 1]

    // 快排
    var left = 0, right = nums.length - 1;
    while (left <= right) {
        var pivot = randomPartition(nums, left, right);
        if (pivot === (nums.length - k)) {
            return nums[pivot];
        }
        if (pivot > (nums.length - k)) {
            right = pivot - 1;
        } else {
            left = pivot + 1;
        }
    }
};

function randomPartition(arr, left, right) {
    var random = Math.floor(Math.random() * (right - left)) + left;
    swap(arr, left, random);
    return partition(arr, left, right);
}

function partition(arr, left, right) {
    var pivot = arr[left];
    while (left < right) {
        while (left < right && arr[right] > pivot) {
            right--;
        }
        arr[left] = arr[right];
        while (left < right && arr[left] <= pivot) {
            left++;
        }
        arr[right] = arr[left];
    }
    arr[left] = pivot;
    return left;
}

function swap(arr, left, right) {
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4 // 4

console.log(findKthLargest(nums, k))