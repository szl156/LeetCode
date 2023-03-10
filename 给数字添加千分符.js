let num = 305027
const numFormat = (num) => {
    const str = num.toString()
    let arr = str.split('')
    arr.reverse()
    if (num > 1000) {
        for (let i = 2; i < arr.length; i += 4) {
            arr.splice(i + 1, 0, ',')
        }
        if(arr[arr.length-1]===',') arr.pop()
        return arr.reverse().join('')
    }
    return str
}
console.log(numFormat(num))
