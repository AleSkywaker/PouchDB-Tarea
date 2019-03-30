//Utilidades para guardar PouchDB
const db = new PouchDB('mensajes');

function guardarMensaje(mensaje) {
	mensaje._id = new Date().toISOString();

	db.put(mensaje).then(() => {
  
		self.registration.sync.register('nuevo-post')
		
		const newResp = {ok: true, offline: true}

		console.log('Mensaje guardado para posterior posteo');
	});
}
