// 2037
/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
    seats = seats.sort((a, b) => a - b)
    students = students.sort((a, b) => a - b)
    let ans = 0
    for (let i = 0; i < seats.length; i++) {
        ans += Math.abs((seats[i] - students[i]))
    }
    return ans
};
const seats = [4, 1, 5, 9], students = [1, 3, 2, 6]
console.log(minMovesToSeat(seats, students))
