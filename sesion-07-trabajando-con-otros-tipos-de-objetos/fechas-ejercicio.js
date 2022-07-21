const hoy = new Date();
console.log(hoy);

const nacimiento = new Date(1985, 7, 9)
console.log(nacimiento);

let fechaMayor = (hoy > nacimiento);
console.log(fechaMayor);

let mes = nacimiento.getMonth() +1;
console.log(mes);

let año = nacimiento.getFullYear();
console.log(año);