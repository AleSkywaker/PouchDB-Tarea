

class Camara {
    constructor(videoNode) {
        this.videoNode = videoNode;
        console.log('Camara inicializada')
    }

    encender() {
        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: { width: 300, height: 300 }
        }).then(stream => {
            this.videoNode.srcObject = stream;
            this.stream = stream;
        })
    }
    apagar() {

        this.videoNode.pause();


        if (this.stream) {
            this.stream.getTracks()[0].stop();
        }

    }
    tomarFoto() {
        //Crear elemento canvas para renderizar la foto
        let canvas = document.createElement('canvas');

        // Configurar medidas del canvas
        canvas.setAttribute('width', 300)
        canvas.setAttribute('height', 300)

        //Obtener contexto del canvas para una simple imagen
        let context = canvas.getContext('2d');

        // Dibujar imagen dentro del canvas
        context.drawImage(this.videoNode, 0, 0, canvas.width, canvas.height);

        this.foto = context.canvas.toDataURL();

        //Limpieza
        canvas = null;
        context = null;

        return this.foto;

    }
}