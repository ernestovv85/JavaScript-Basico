const boton = document.querySelector("#boton");

boton.addEventListener("click", () => {
  alert("click en el botón");
});


$(() => {
  $("#boton").click(() => {
    console.log("hola estoy utilizando JQuery")
  })
})

