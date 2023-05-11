const contacts = [];

function renderContacts() {
  const contactsTableBody = document.querySelector("#contactsTable tbody");
  contactsTableBody.innerHTML = "";
}
contacts.forEach((contact) => {
  const row = document.createElement("tr");
  row.innerHTML = `
			<td>${contact.name}</td>
			<td>${contact.phone}</td>
			<td>
				<button class="editButton" data-id="${contact.id}">Editar</button>
				<button class="deleteButton" data-id="${contact.id}">Eliminar</button>
			</td>
		`;
  contactsTableBody.appendChild(row);
});

// Falta añadir los event listeners a los botones de agregar contacto, guardar cambios y buscar.
