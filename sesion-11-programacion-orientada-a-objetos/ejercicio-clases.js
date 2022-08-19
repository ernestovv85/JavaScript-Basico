class Estudiante{
  constructor(nombre, asignaturas){
    this.nombre = nombre;
    this.asignaturas = asignaturas;
  }
  obtenDatos(){
    return (`Hola mi nombre es ${this.nombre} y tomo los cursos de ${this.asignaturas}, en Open Bootcamp.`);
  }
};
const estudiante1= new Estudiante('Ernesto', 'Javascript, HTML y CSS');
console.log(estudiante1.obtenDatos())