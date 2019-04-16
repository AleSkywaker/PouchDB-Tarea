const fs = require('fs');
const urlsafeBase64 = require('urlsafe-base64');
// const vapid = require('./vapid.json');

const suscripciones = [];

// module.exports.getKey = () => {
// 	return urlsafeBase64.decode(vapid.publicKey);
// };

module.exports.addSubscription = (sus) => {
	suscripciones.push(sus);
	console.log('Back end', suscripciones);
	fs.writeFileSync(`${__dirname}/subs-db.json`, JSON.stringify(suscripciones))
};
