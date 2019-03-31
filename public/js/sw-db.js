//Utilidades para guardar PouchDB
const db = new PouchDB('mensajes');

function guardarMensaje(mensaje) {
	mensaje._id = new Date().toISOString();

	return db.put(mensaje).then(() => {
		self.registration.sync.register('nuevo-post');

		const newResp = { ok: true, offline: true };

		return new Response(JSON.stringify(newResp));
		console.log('Mensaje guardado para posterior posteo');
	});
}

//Postear mensajes a la API

function postearMensajes(){

	db.allDocs({include_docs:true}).then(docs=>{
		docs.rows.forEach(row => {
			const doc = row.doc;
		});
	})

}
