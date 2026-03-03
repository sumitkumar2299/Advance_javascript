/**
 * callback hell ->  readability problem 
 * inversion control -> inversion of control can be resolved by promise 
 */

let arr = [1,10,1000,9,2,3,11];
arr.sort(function cmp(a,b){
    return a-b;
})
console.log(arr);

  

function doTask(fn,x){
    // whole implementation is done by team A
    fn(x*x);
} // team A


// here team b tries to use it 

doTask(function exec(num){
    // due to callbacks, i am passing control of how exec should be called to dotask 
    // this is called inversion of control 

    console.log("woah num is", num)
},9)