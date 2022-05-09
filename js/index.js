function validar () {
  console.log ("envio");

}


function abrirMenu() {
  var menu = document.getElementById("seccion-menu-mobile");
  menu.classList.add("mostrar");
}
function abrirForm() {
  var formulario = document.getElementById("formulario");
  formulario.classList.add("mostrar");

}

function mostrarFeedback() {
  var fondoPopup = document.getElementById ("contenedor-feedback");
  var seccionFormulario = document.getElementById ("formulario");

  seccionFormulario.classList.add("no-mostrar");
  fondoPopup.classList.remove("no-mostrar");
  fondoPopup.classList.add("mostrar");

}

function recolectarDatos () {
  var inputNombre = document.getElementById("fname");
  var nombre = inputNombre.value;

  var spanNombre = document.getElementById("nombre-steam");

  spanNombre.innerText = nombre;
}
function resetearFormulario () {
  var inputNombre = document.getElementById("fname");
  var inputMail = document.getElementById("mail");
  inputNombre.value = "";
  inputMail.value = "";

}

function enviarFormulario(e) {
  recolectarDatos();
  mostrarFeedback();
  resetearFormulario();
  
}

function cerrarFeedback () {
  var fondoPopup = document.getElementById ("contenedor-feedback");
  var seccionFormulario = document.getElementById ("formulario");

  fondoPopup.classList.remove("mostrar");
  fondoPopup.classList.add("no-mostrar");
  seccionFormulario.classList.add("no-mostrar");

}

function cerrarMenu () {
  var cerrar = document.getElementById("seccion-menu-mobile");
  cerrar.classList.remove("mostrar");
  cerrar.classList.add("no-mostrar");

}
