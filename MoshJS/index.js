const circle={
    radius:1,
    location:{
        x:1,
        y:1
    },
    isVisible:true,
    draw:function(){
        console.log('draw');
    }
}
//工厂方法
function createCircle(radius){
    return {
        radius:radius,//如果key 和value一样  可以将值删除掉
        //即 radius,  只保留  key进行了
        draw(){//  简化写法
            console.log('draw');
        }

    }
}

//Camel Notation :  oneTwoThreeFour
//Pascal Notation:  OneTwoThreeFour
//Constructor Function   使用Pascal Notation
function Circle(radius){
    this.radius = radius;
    //javaScript的对象是动态的  你可以声明之后再给他加属性
    this.draw=function(){
        console.log('draw');
    }
   // return this;  这个是后台发生的
}
const circle=new Circle(1);

Circle.call({},1)

const Circle1=new Function('radius',`   //视频51
    this.radius = radius;
    //javaScript的对象是动态的  你可以声明之后再给他加属性
    this.draw=function(){
        console.log('draw');
    }
`);
const circle=new Circle1(1);

