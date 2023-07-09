const SPEED=0.02
export default class Paddle{
    constructor(paddleElem){
        this.paddleElem=paddleElem;
    }

    get position(){
        return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--position"));

    }

    set position(value){
        this.paddleElem.style.setProperty("--position",value);
    }
    rect(){
        return this.paddleElem.getBoundingClientRect();
    }
    reset(){
        this.position=50
    }
    update(delta,ballheight){
        this.position+=SPEED*delta*(ballheight-this.position);
    }
}