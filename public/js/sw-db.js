//Utilidades para guardar PouchDB
const db = new PouchDB('mensajes');

function guardarMensaje(mensaje) {
	mensaje._id = new Date().toISOString();

	db.put(mensaje).then(() => {
  
		self.registration.sync.register('nuevo-post')
		

		console.log('Mensaje guardado para posterior posteo');
	});
}
