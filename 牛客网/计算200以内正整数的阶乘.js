// 编写一段程序，用于计算200以内正整数的阶乘
let n = 50 // 3628800
const fac = (n) => {
    if (n === 1) return 1
    return n * fac(n - 1)
}
console.log(BigInt(fac(n)).toString().replace('n',))
if (n < 1 || n > 200) console.log('Error')
else fn(n)

function fn(n) {
    let res = n.toString()
    n--
    while (n > 1) {
        const ans = []
        let len = res.length - 1
        while (len >= 0) {
            ans.unshift(parseInt(res[len]) * n)
            len--
        }
        res = numberString(ans)
        n--
    }
    console.log(res)
}

function numberString(ans) {
    const n = ans.length
    let res = '', cur = 0
    for (let i = n - 1; i >= 0; i--) {
        const current = parseInt(ans[i])
        cur += current
        const c = cur % 10
        if (c === cur) cur = 0
        else cur = (cur - c) / 10
        res = c + res
    }
    if (cur !== 0) res = cur + res
    return res
}