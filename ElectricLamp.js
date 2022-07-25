class ElectricLamp{
    trangThai;

    constructor(trangThai) {
        this.trangThai = trangThai;
    }
    turnOff(){
        this.trangThai=false
    }
    turnOn(){
        this.trangThai=true
    }
}