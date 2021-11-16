function Findevennumber(arr) {
    let evenarr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2==0){
            evenarr.push(arr[i]);
        }
    }
    return evenarr;
}
console.log(Findevennumber([23,42,33,55,66,78,91,32]));

function Calculator(num1,num2,operator){
    
    switch (operator) {
        case '/':
            return num1/num2;
            break;
        case '-':
            return num1-num2;
            break;
        case '+':
            return num1+num2;
            break;
        case '*':
           return num1*num2;
            break;
        default:
            console.log("please enter correctly");
            break;
    }
   
}
console.log(Calculator(57,43,'+'));
``
function Includenumber(number) {
    let arr=[1,2,3,4,5,6,7,8,9,10]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===number){
            return true;
        }
    }
     return false;
}
console.log(Includenumber(5));

