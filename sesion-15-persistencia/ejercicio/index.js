var nombre = "Ernesto"
var apellido = "Velazquez"

var obj = {
  nombre,
  apellido
}

localStorage.setItem("", JSON.stringify(obj))
sessionStorage.setItem("", JSON.stringify(obj))
document.cookie = "nombreCookie=" + JSON.stringify(obj) + "; max-age=120"