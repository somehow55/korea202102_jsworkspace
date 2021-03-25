/* 아이템을 정의한다!! 
role1) candy : 무기를 미사일1로 전환
role2) candy2 : 적군 모두 소멸
role3) candy3 : hp 추가
role4) candy4 : 주인공의 속도 업그레이드
*/
class Item{
constructor(itemRole, container, width, height, x, y, velX, velY){
    //멤버변수
    this.itemRole = itemRole;       //각 아이템을 보유할 정보객체. src역할도 해준다.
    this.container=container;
    this.img=document.createElement("img");
    this.src=itemRole.src;
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
        // removeObject(this.container, this.img, enemyArray, enemyArray.indexOf(this));
    }
}
render(){
    this.img.style.left=this.x+"px";
    this.img.style.top=this.y+"px";

}

}