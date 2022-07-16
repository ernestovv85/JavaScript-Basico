function factorial(n) {
  let i = 1
  let total = 1
  while (i <= n) {
    total *= i
    i++
  }
  return total

}
console.log(factorial(10))