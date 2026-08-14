function staticGetTotalx1000(){
let firstNumber=5;
let secondNumber=6;
let sum=firstNumber+secondNumber;
let sumX1000=sum*1000;
console.log(sumX1000)
}
staticGetTotalx1000()


function dynanicGetTotalX1000(firstNumber:number,secondNumber:number){
let sum=firstNumber+secondNumber;
let sumX1000=sum*1000;
console.log(sumX1000)
}
 
dynanicGetTotalX1000(2,3)

function storeTotalX1000(firstNumber:number,secondNumber:number):number{
let sum=firstNumber+secondNumber;
let sumX1000=sum*1000;
return sumX1000
}

storeTotalX1000(7,8)
console.log(storeTotalX1000(7,8))
const enhancedStoreTotalX1000 =(firstNumber:number,secondNumber:number):number =>firstNumber+secondNumber;
 console.log(enhancedStoreTotalX1000(4,5))