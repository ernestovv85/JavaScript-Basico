function verdad() {
  return true;
};

setTimeout(function asincrona() {
  console.log('hola soy una promesa');
}, 5000);

function* generaPares() {
  
  for(i=2; i<=20; i++){
    if(i % 2 === 0)
    yield i;
  }
};

const pares = generaPares()

console.log(pares.next().value)
console.log(pares.next().value)
console.log(pares.next().value)
console.log(pares.next().value)
console.log(pares.next().value)
console.log(pares.next().value)
console.log(pares.next().value)
console.log(pares.next().value)
console.log(pares.next().value)
console.log(pares.next().value)