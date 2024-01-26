class rnbo{
    constructor(x,y,xMax,yMax){
        this.x = x;
        this.y = y;
        this.xMax = xMax;
        this.yMax = yMax;
    }

    resize(x,y,xMax,yMax){
        this.x = x;
        this.y = y;
        this.xMax = xMax;
        this.yMax = yMax;
    }

    show(){
        noStroke();
        let colorNum = 500;

        for(let i=0;i < colorNum; i++){
            fill((360/colorNum) * [i], 360 * prog * 0.01 ,360 * prog * 0.01 );
            rect(this.x,this.y + this.yMax/colorNum * [i] ,this.xMax * prog * 0.01, this.yMax / colorNum + 1);
        }

        noFill();
        strokeWeight(1);
        stroke(360,0,160);
        rect(this.x - 2, this.y -2, this.xMax +4, this.yMax +5);
    }
}