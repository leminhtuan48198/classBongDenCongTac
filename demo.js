let b1=new ElectricLamp(false);
let c1= new SwitchButton(false,b1);
for (let i = 0; i < 10; i++) {
    if(i%2==0){
        c1.switchOn();
        alert(b1.trangThai)
    }else{
        c1.switchOff();
        alert(b1.trangThai)
    }
}
