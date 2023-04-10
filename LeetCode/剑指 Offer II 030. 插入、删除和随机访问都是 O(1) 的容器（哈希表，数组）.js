// 设计一个支持在平均 时间复杂度 O(1) 下，执行以下操作的数据结构：
// insert(val)：当元素 val 不存在时返回 true ，并向集合中插入该项，否则返回 false 。
// remove(val)：当元素 val 存在时返回 true ，并从集合中移除该项，否则返回 false 。
// getRandom：随机返回现有集合中的一项。每个元素应该有 相同的概率 被返回。
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
    this.arr = []
    this.map = new Map()
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.map.has(val)) {
        return false
    } else {
        var len = this.arr.length
        this.map.set(val, len)
        this.arr.push(val)
        return true
    }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!this.map.has(val)) {
        return false
    } else {
        var index = this.map.get(val)
        this.arr[index] = this.arr[this.arr.length - 1]
        this.map.set(this.arr[index], index)
        this.arr.pop()
        this.map.delete(val)
        return true
    }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    var randomindex = Math.floor(Math.random() * this.arr.length)
    return this.arr[randomindex]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */