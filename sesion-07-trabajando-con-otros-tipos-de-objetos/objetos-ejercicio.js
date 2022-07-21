const obj = {
  nombre: 'ernesto',
  apellido: 'velazquez',
  edad: 36,
  altura: 1.85,
  eresDesarrollador: false,
}

let edad = obj.edad;
console.log(edad);

const amigos = [obj, 
  {
  nombre: 'juan',
  apellido: 'hernandez',
  edad: 33,
  altura: 1.70,
  eresDesarrollador: false,
  },
  {
  nombre: 'paco',
  apellido: 'fernandez',
  edad: 38,
  altura: 1.75,
  eresDesarrollador: false,
  }];

console.log(amigos);

amigos.sort((a, b) => b.edad - a.edad);
console.log(amigos);