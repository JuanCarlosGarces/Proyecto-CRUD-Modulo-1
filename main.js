<<<<<<< HEAD
/* Declaramos nuestras variables de los formularios */
const nombre = document.getElementsByClassName(".nombre");
const telefono = document.getElementsByClassName(".telefono");
const listadoDeContactos = document.getElementsByClassName(".listadoDeContactos");
const baseDeDatos = window.localStorage;

/* Declaramos las variables de los botones */
const btnAgregarContacto = document.getElementsByClassName(".agregar");
const btnEditarContacto = document.getElementsByClassName(".editar");

/*btnAgregarContacto.onclick = () => {
	let contacto = {
	id: Math.random(1, 100),
	nombre: nombre.value,
	telefono: telefono.value,
	}
	guardarContacto(baseDeDatos, contacto)
}*/

subirContactos(baseDeDatos);
=======

/* Declaramos nuestras variables de los formularios */ 
const nombre = document.getElementsByClassName('.nombre');
const telefono = document.getElementsByClassName('.telefono');
const listadoDeContactos = document.getElementsByClassName('.listadoDeContactos');
const baseDeDatos = window.localStorage

/* Declaramos las variables de los botones */
const btnAgregarContacto = document.getElementsByClassName('.agregar');
const btnEditarContacto = document.getElementsByClassName('.editar');

/*btnAgregarContacto.onclick = () => {
	let contacto = {
	id: Math.random(1, 100),
	nombre: nombre.value,
	telefono: telefono.value,
	}
	guardarContacto(baseDeDatos, contacto)
}*/

subirContactos(baseDeDatos);

>>>>>>> c9c8d087cdee7a18d8b23b1828847bb83b6cb8af
