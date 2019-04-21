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
    suscripciones.forEach((subs, i )=> {
		webpush.sendNotification(subs, JSON.stringify(post))
	});
}
