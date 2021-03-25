class Hp{
    constructor(container, src, width, height, x, y){
        //멤버변수
        this.container=container;
        this.img=document.createElement("img");
        this.src=src;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;

        //하트의 모습을 설정해본다!
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
}