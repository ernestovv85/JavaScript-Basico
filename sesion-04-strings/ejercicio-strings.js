let nombre = 'Ernesto';
let apellido = 'Velázquez';
let estudiante = `${nombre} ${apellido}`;
let estudianteMayus = estudiante.toUpperCase;
let estudianteMinus = estudiante.toLowerCase;
let letras = estudiante.length;
let primeraLetra = nombre[1];
let ultimaLetra = apellido[9];
let sinEspacios = estudiante.replace(/ /g,'');
let boolean = estudiante.includes(nombre);

console.log(boolean);

