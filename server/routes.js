// Routes.js - Módulo de rutas
const express = require("express");
const router = express.Router();
const push = require("./push");

const mensajes = [
  {
    _id: "XXX",
    user: "spiderman",
    mensaje: "Hola Mundo"
  }
];

// Get mensajes
router.get("/", function(req, res) {
  // res.json('Obteniendo mensajes');
  res.json(mensajes);
});

// Post mensaje
router.post("/", function(req, res) {
  const mensaje = {
    mensaje: req.body.mensaje,
    user: req.body.user
  };

  mensajes.push(mensaje);

  console.log(mensajes);

  res.json({
    ok: true,
    mensaje
  });
});
//Almacenar suscripcion
router.post("/subscribe", (req, res) => {
  const suscription = req.body;

  push.addSubscription(suscription);
  console.log(suscription);
  res.json(suscription);
});
//Almacenar suscripcion
router.get("/key", (req, res) => {
  const key = push.getKey();
  res.send(key);
});
//Enviar una notificacion PUSH a las personas
// que nosotros queramos
// Es algo que se controla del lado del server
router.post("/push", (req, res) => {
  const notificacion = {
    titulo: req.body.titulo,
    texto: req.body.texto,
    nombre: req.body.usuario
  };

  push.sendPush(notificacion);
  res.json(notificacion);
});

module.exports = router;
