const fs = require('fs');
const urlsafeBase64 = require('urlsafe-base64');
const vapid = require('./vapid.json');

const webpush = require('web-push');

webpush.setVapidDetails(
	'mailto:uricaine@hotmail.com',
	vapid.publicKey,
	vapid.privateKey
  );

//Make sure the json file is not empty.
const suscripciones =  require('./subs-db.json');

module.exports.getKey = () => {
	return urlsafeBase64.decode(vapid.publicKey);
};

module.exports.addSubscription = (sus) => {
	suscripciones.push(sus);
	console.log('Back end', suscripciones);
	fs.writeFileSync(`${__dirname}/subs-db.json`, JSON.stringify(suscripciones))
};

module.exports.sendPush = (post)=>{
		console.log('Mandando PUSHES')
		const notiticacionesEnviadas = [];
    suscripciones.forEach((subs, i )=> {
		const pushProm = webpush.sendNotification(subs, JSON.stringify(post))
			.then(console.log('Notification enviada'))
			.catch(err => {
					console.log('notiticacion falló')
					if(err.statusCode === 410 ){// GONE, ya no existe
						suscripciones[i].borrar = true;
					} 
			})
			notiticacionesEnviadas.push(pushProm)
	});
}
