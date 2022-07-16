function factorial(n) {

  let i = 1
  let total = 1
  while (i <= n) {
    total *= i;
    i++
    if (n > 10) {
      break;
    }
  }
  return total;

}

console.log(factorial(10))