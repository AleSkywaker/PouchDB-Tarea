

class Camara {
    constructor(videoNode){
        this.videoNode = videoNode;
        console.log('Camara inicializada')
    }

    encender(){
        navigator.mediaDevices.getUserMedia();
    }
    apagar(){

    }
}