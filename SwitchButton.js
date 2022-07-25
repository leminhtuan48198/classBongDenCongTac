class SwitchButton{
    status;
    lamp;
    constructor(status,lamp) {
        this.status = status;
        this.lamp = lamp;
    }
    connectoLamp(lamp){
        this.lamp=lamp;
    }
    switchOff(){
        this.status=false;
        this.lamp.trangThai=false;
    }
    switchOn(){
        this.status=true;
        this.lamp.trangThai=true;
    }
}