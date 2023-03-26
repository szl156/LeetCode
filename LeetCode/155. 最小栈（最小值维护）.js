// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
// 实现 MinStack 类:
// MinStack() 初始化堆栈对象。
// void push(int val) 将元素val推入堆栈。
// void pop() 删除堆栈顶部的元素。
// int top() 获取堆栈顶部的元素。
// int getMin() 获取堆栈中的最小元素。

var MinStack = function () {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (this.stack.length === 0) {
        this.stack.push({
            val,
            minVal: val
        })
    } else {
        // 读取之前最小值的对象
        let prevMinItem = this.stack[this.stack.length - 1];
        // 和当前入栈的比较 重新计算最小值
        let currMinVal = Math.min(prevMinItem.minVal, val);
        // 确保存在栈顶的对象中一定是当前入栈元素的最小值
        this.stack.push({
            val,
            minVal: currMinVal
        })
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.stack[this.stack.length - 1].minVal;

};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */