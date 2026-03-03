// fun -> it's a higher order function 
// x - number , fn - function 

function fun(x, fn){
    for(let i = 0; i<x; i++){
        console.log(i);
    }

    // callback function 
    fn();
}

fun(10,function exec(){
    console.log("i am executed also");
})


/**
 * 
 * hof consumes some arguments as function , the function you pass as an argument 
 * while calling the higher order function is called as callback function 
 
 */
