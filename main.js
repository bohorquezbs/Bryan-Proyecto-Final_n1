function formula(p, r, n) {
    let numerador = p * r * ((1 + r) ** n)
    let denominador = ((1 + r) ** n) - 1
    let res = (numerador / denominador).toFixed(2)
    console.log(res)
}