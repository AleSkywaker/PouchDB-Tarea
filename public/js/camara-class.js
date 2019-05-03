

class Camara {
    constructor(videoNode){
        this.videoNode = videoNode;
    }

    enceder(){
        navigator.mediaDevices.getUserMedia();
    }
    apagar(){

    }
}