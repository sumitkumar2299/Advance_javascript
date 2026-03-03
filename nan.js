console.log(Number("123"));
console.log(Number("abcd"));
console.log(Number("0xa"));


let x = NaN;
console.log(x == NaN)
console.log(isNaN(x))

console.log(isNaN("sumit")) // isNan converts the incoming input to a number 
console.log(Number.isNaN("sumit"));
console.log(Number.isNaN(x))



// follow the documentation of ecmascript 2019 for better understanding. 

if(typeof(x) == "number" && x === x){
    console.log(true);
}

console.log(x === x);

let y = 0
console.log(y === y);

