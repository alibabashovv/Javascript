class Operations {
    constructor(number) {
        this.number = number;
    }
    plus(num) {
        this.number += num;
        return this
    }  
    minus(num) {
        this.number -= num;
        return this;
    }
    multiply(num) {
        this.number *= num;
        return this;
    }
    divided(num) {
        this.number /= num;
        return this;
    }   
}

var result = new Operations(50).plus(6).minus(30).multiply(3).divided(2)
console.log(Object.values(result)[0]);