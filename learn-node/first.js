var myObj ={
    star:"Algol",
    constellation:"Perseus"
};
if("star" in myObj){
   console.log("There is a property called star in this object");
}

const person={
    name:'guo',
    age:21
};

for(let key in person)
    console.log(key,person[key]);

    const colors=['red','green','blue'];
    for(let index in colors){
        console.log(index,colors[index]);
    }
//for of  用于数组 这样就不需要索引index
for(let color of colors){
    console.log(color);
}

function  max(num1,num2){
    return num1>num2?num1:num2;
}
console.log(max(8199,8199));


function isLandscape(width,height){
    return width>height
}
console.log(isLandscape(61,51));
console.log(typeof(15));

function fizzBuzz(input){
    if(typeof(input)!=='number'){
        return NaN;
    }
    else if((input%5==0)&&(input%3==0)){
        return 'FizzBuzz';
    }
    else if(input%5==0){
        return 'Buzz';
    }
    else if(input%3==0){
        return 'Fizz';
    }
    else {
        return input;
    }
}

const output=fizzBuzz(false);
console.log(output);