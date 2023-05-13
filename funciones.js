/*function agregarContacto() {
    document.getElementById("btnAgregar");
}*/
    

const guardarContacto = (baseDeDatos, contacto) => {
    baseDeDatos.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/'
}

const subirContactos = (baseDeDatos) => {
    let claves = Object.keys(baseDeDatos)
    console.log(claves)
    for(claves of claves) {
        console.log(claves)
    }
}