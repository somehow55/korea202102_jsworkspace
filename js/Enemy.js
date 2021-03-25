/*적군을 정의한다*/
class Enemy{
    /*
    상태: 변수(속성)
    동작: 함수(메서드)
    */
    constructor(container, src, width, height, x, y, velX, velY){
        //멤버변수
        this.container=container;
        this.img=document.createElement("img");
        this.src=src;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY;

        //적군의 모습
        this.img.src=this.src;
        //크기
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        //위치
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        this.container.appendChild(this.img);
    }
    tick(){
        this.x+=this.velX;
        this.y+=this.velY;

        // 내가 화면의 음수값을 가질 때, 즉 좌측 한계점을 지나면, 제거!
        if(this.x < 0){
            // removeObject(부모컨테이너, 제거될 자식 요소, 어떤 배열에서?, 몇번째요소를?);
            removeObject(this.container, this.img, enemyArray, enemyArray.indexOf(this));
        }
    }
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

    }
}