function fun(){
    for(let i = 0; i<10; i++){
        // do something;
    }
    console.log(i);
}
 
function process (x,y){
    if(x>y){
        // var temp = x;
        let temp = x;
        x = y;
        y = temp;
    }
    return y-x;
}

fun();



// var allows redecleration but let does not allow redecleraation 

var m  = 5;
var m = 6;
console.log(m);


let n = 6;
let n = 9;

console.log(m)
console.log(n);