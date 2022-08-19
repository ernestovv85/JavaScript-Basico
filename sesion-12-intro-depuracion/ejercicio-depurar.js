function fibonacci(num){
  const fib = [0, 1];
  for (let i = 2; i <= num; i++){
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib[num];
};
 fibonacci(6);