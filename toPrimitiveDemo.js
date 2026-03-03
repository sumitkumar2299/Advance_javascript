let obj = {
    toString(){
        // by default it gives [object object]
        return '123'  
    }
}
console.log(obj)


// let obj1 = {}

// console.log(10-obj1)  // obj.valueof -> object, toString -> [object object]
// let obj2 = {x:9,y:8};
// let obj3 = {x:7,valueof() {return 99}};
// console.log(100-obj3)


let obj2 = {
    x:7, 
    valueOf() {return 99}
};
console.log(100-obj2) 


let obj3 = {};
console.log(obj);

console.log("18"+obj3); 
console.log(18+obj3);


// default tostring gives [object object]