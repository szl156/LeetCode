const minSort = (arr) => {
    let count = 0, n = arr.length
    while (n) {

    }
    return count
}
let arr = [1, 5, 4, 2, 3]
console.log(minSort(arr))
const insertDigit = (n1, n2) => {
    let strNum1 = n1.toString(), max = -Infinity
    for (let i = 0; i < strNum1.length; i++) {
        let newNum = parseInt(strNum1.slice(0, i) + n2 + strNum1.slice(i))
        max = Math.max(max, newNum)
    }
    return max
}
// console.log(insertDigit(44 ,5))
