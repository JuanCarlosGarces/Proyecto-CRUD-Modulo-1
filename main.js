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
