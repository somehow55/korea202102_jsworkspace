/*
비행기를 정의해본다~!
비행기라는 사용자 정의 자료형을 선언!!
*/

class Plane{
    /* 변수, 함수가 와야 한다, 올 수 있다 */

    // 객체의 초기화는 생성자 method가 담당한다
    // 비행기가 어떤 특성을 가지고 태어날지를 결정!

    constructor(container, src, width, height, x, y, velX, velY){
        // 멤버변수 선언 및 초기화 ---- 멤버변수???
        this.container = container; //비행기가 붙을 부모 요소
        this.img = document.createElement("img");
        // this.src = "../images/shooting/plane.png";
        this.src = src;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.velX = velX;      //주인공의 x축으로의 속도를 결정, but 아이템 먹으면 속도 바뀌게 할 것이므로 0이 아닌 velX(매개변수)로 준다
        this.velY = velY;

        // 멤버변수를 이용해 속성값 지정(스타일 속성 지정)
        this.img.src = src;
        this.img.style.width = width + "px";
        this.img.style.height = height + "px";
        this.img.style.position = "absolute";
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";

        // 화면에 부착
        this.container.appendChild(this.img);
    }

    tick(){
        this.x += this.velX;        //등속도 계속 누적
        this.y += this.velY;

        if(this.x <= 0){        //좌측 화면 밖으로 나가지 않도록! 고정
            this.x = 0;
        }   
        // console.log("this.x= ", this.x);
        // console.log("this.y= ", this.y);


        // 나와 적군들과의 충돌체크 (나의 hp가 닳고 너 죽고)
        for(var i = 0; i < enemyArray.length; i++){
            if(hitTest(this.img, enemyArray[i].img)){       // true이면 충돌한 것
                removeObject(this.container, enemyArray[i].img, enemyArray, i);
                removeObject(info, hpArray[hpArray.length - 1].img, hpArray, hpArray.length - 1);  // 나의 hp 제거
                if(hpArray.length==0){
                    var div=document.createElement("div");
                    div.style.fontSize=150+"px";
                    div.style.textAlign="center";
                    div.style.color="#FFF";
                    div.style.fontWeight="bold";
                    div.style.height=600+"px"
                    div.innerHTML="GAME OVER <br><a href=\"javascript:location.reload();\">Retry</a>";
                    this.container.appendChild(div)//생성된 div를 화면에 부착
                }
            }
        }

/* candy : 무기를 미사일1로 전환
candy2 : 적군 모두 소멸
candy3 : hp 추가
candy4 : 주인공의 속도 업그레이드 */

        // 아이템 취득 (아이템과의 충돌검사)
        for(var i = 0; i < itemArray.length; i++){
            // hitTest(나, 아이템);
            if(hitTest(this.img, itemArray[i].img)){
                removeObject(this.container, itemArray[i].img, itemArray, i);   //사탕제거
                
                // 어떤 사탕을 먹었는지 조사
                weaponIndex = 2;
            }
        }

        if(this.x >= screen.width - this.width){          //우측 경계에 부딪히면 고정
            // console.log("경계에 도착했어요!");
            this.x = screen.width - this.width;            
        }
// 아래였던걸 위로 바꿈
        // if(this.y >= window.innerHeight - this.height){          //상하 경계에 부딪히면 고정
        //     this.y = window.innerHeight - this.height;            

        if(this.y <= 0){        // 상측 화면 밖으로 나가지 않도록! 고정
            this.y = 0;
        }
        if(this.y >= 600 - this.height){          //상하 경계에 부딪히면 고정
            this.y = 600 - this.height;            
        }
    }

    //  변경된 값을 화면에 보여주기 위한 그래픽 처리 (게임 분야, 그래픽 분야에서는 렌더링)
    render(){
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
    }
    // 주인공이 움직이는 것을 조종. = 함수X 메서드O
}