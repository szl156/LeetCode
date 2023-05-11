/*
一所学校里有一些班级，每个班级里有一些学生，现在每个班都会进行一场期末考试。给你一个二维数组 classes，
其中classes[i] = [passi, totali]，表示你提前知道了第i个班级总共有totali个学生，其中只有passi个学生可以通过考试。
给你一个整数extraStudents，表示额外有extraStudents个聪明的学生，他们 一定能通过任何班级的期末考。
你需要给这extraStudents个学生每人都安排一个班级，使得 所有班级的 平均通过率 最大。
一个班级的通过率等于这个班级通过考试的学生人数除以这个班级的总人数。平均通过率是所有班级的通过率之和除以班级数目。
请你返回在安排这 extraStudents 个学生去对应班级后的 最大平均通过率。与标准答案误差范围在10-5以内的结果都会视为正确结果。
*/
class TinyQueue {
    constructor(data = [], compare) {
        this.data = data
        this.length = this.data.length
        this.compare = compare
    }

    /**
     * 添加一个元素
     * @param {*[]} item
     * */
    push(item) {
        this.data.push(item)
        this._up(this.length++)
    }

    /**
     * 移除并返回堆顶元素，即最小值
     * @return {number}
     * */
    pop() {
        if (!this.length) return
        const top = this.data[0]
        const bottom = this.data.pop()
        if (--this.length > 0) {
            this.data[0] = bottom
            this._down(0)
        }
        return top
    }

    /**
     * 将新元素向上调整位置，保证小根堆的性质
     * @param {number} pos
     * */
    _up(pos) {
        const {data, compare} = this
        const item = data[pos]// 取出最后一个元素
        while (pos > 0) {
            const parent = (pos - 1) >> 1
            const current = data[parent]
            if (compare(item, current) >= 0) break
            data[pos] = current
            pos = parent
        }
        data[pos] = item
    }

    /**
     * 将堆顶元素向下调整位置，保证小根堆的性质
     * @param {number} pos
     * */
    _down(pos) {
        const {data, compare} = this
        const halfLength = this.length >> 1
        const item = data[pos]
        while (pos < halfLength) {
            let bestChild = (pos << 1) + 1
            const right = bestChild + 1
            if (right < this.length && compare(data[right], data[bestChild]) < 0) bestChild = right
            if (compare(data[bestChild], item) >= 0) break
            data[pos] = data[bestChild]
            pos = bestChild
        }
        data[pos] = item
    }
}

/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function (classes, extraStudents) {
// 优先队列
    const pq = new TinyQueue([], (a, b) => b[0] - a[0])
    const diff = (x, y) => (x + 1) / (y + 1) - x / y
    let ret = 0
    for (const [x, y] of classes) {
        ret += x / y
        pq.push([diff(x, y), x, y])
    }
    while (extraStudents--) {
        const [d, x, y] = pq.pop()
        ret += d
        pq.push([diff(x + 1, y + 1), x + 1, y + 1])
    }
    return ret / classes.length
};
let classes = [[1, 2], [3, 5], [2, 2]], extraStudents = 2 //0.78333
// let classes = [[2, 4], [3, 9], [4, 5], [2, 10]], extraStudents = 4 //0.53485
console.log(maxAverageRatio(classes, extraStudents))

