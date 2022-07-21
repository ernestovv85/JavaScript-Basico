let compras = ['cereal', 'leche', 'yogurth', 'gelatina', 'atun'];

let agregar = compras.push('aceite de girasol');
console.log(compras);

let quitar = compras.pop();
console.log(compras);

let peliculas = [{titulo: 'Bloodsport', director: 'Newt Arnold', fecha: new Date('02/26/1988')}, 
{titulo: 'clash of the titans', director: 'Louis Leterrier', fecha: new Date('04/01/2010')}, 
{titulo: 'Enemy at the gates', director: 'Jean-Jaques Annaud', fecha: new Date('04/11/2001') }];

const filtroFecha = peliculas.filter(obj => obj.fecha >= new Date('01/01/2010'));
console.log(filtroFecha);

const mapTitulo = peliculas.map(obj => obj.titulo);
console.log(mapTitulo);

const mapDirectores = peliculas.map(obj => obj.director);
console.log(mapDirectores);

const concat1 = mapDirectores.concat(mapTitulo);
console.log(concat1);

const concat2 = [...mapDirectores, ...mapTitulo];
console.log(concat2);