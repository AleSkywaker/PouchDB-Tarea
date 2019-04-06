// Routes.js - Módulo de rutas
var express = require('express');
var router = express.Router();


const mensajes = [

  {
    _id: 'XXX',
    user: 'spiderman',
    mensaje: 'Hola Mundo'
  }

];


// Get mensajes
router.get('/', function (req, res) {
  // res.json('Obteniendo mensajes');
  res.json( mensajes );
});


// Post mensaje
router.post('/', function (req, res) {
  
  const mensaje = {
    mensaje: req.body.mensaje,
    user: req.body.user
  };

  mensajes.push( mensaje );

  console.log(mensajes);


  res.json({
    ok: true,
    mensaje
  });
});
//Almacenar suscripcion
router.get('/subscribe', (req, res)=>{
  res.json('subscribe')
})
//Almacenar suscripcion
router.get('/key', (req, res)=>{
  res.json('key público')
})
//Enviar una notificacion PUSH a las personas
// que nosotros queramos
// Es algo que se controla del lado del server
router.get('/push', (req, res)=>{
  res.json('key público')
})


module.exports = router;