// 给定一个整数数据流和一个窗口大小，根据该滑动窗口的大小，计算滑动窗口里所有数字的平均值。
// 实现 MovingAverage 类：
// MovingAverage(int size) 用窗口大小 size 初始化对象。
// double next(int val)成员函数 next每次调用的时候都会往滑动窗口增加一个整数，
// 请计算并返回数据流中最后 size 个值的移动平均值，即滑动窗口里所有数字的平均值。
/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.sum = 0
    this.input = []
    this.size = size
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    if (this.input.length === this.size) {
        let temp = this.input.shift()
        this.sum -= temp
    }
    this.input.push(val)
    this.sum += val
    return this.sum / this.input.length
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */