

class Camara {
    constructor(videoNode){
        this.videoNode = videoNode;
        console.log('Camara inicializada')
    }

    enceder(){
        navigator.mediaDevices.getUserMedia();
    }
    apagar(){

    }
}