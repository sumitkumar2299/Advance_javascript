function getRandomInt(max){
    return Math.floor(Math.random()*max)
}


function createPromiseWithTimeout(){
    return new Promise(function executor(resolve,reject){
        console.log("Entering the executor callback in the promise constructor");
        setTimeout(function ()  {
            let num = getRandomInt(10);
            if(num%2 == 0){
                // if the random number is even we fulfill
                resolve(num);
            }
            else{
                // if the random number is odd we reject 
                reject(num);
            }
        }, 1000);
        console.log("exiting the executor callback in the promise constructor")
    })
}


console.log("starting......");
const p = createPromiseWithTimeout(); 
console.log("we are now waiting for the promise to complete"); 
console.log("currently my promise object is like......",p); 
console.log("Going to register my 1st set of handlers"); 

p.then(
    function fulfillHandler1(value){
        console.log("inside fulfill handler 1 with value", value); 
        console.log("promise after fulfillment",p); 
        setTimeout(function t()  {
            console.log("ended 0s timer")
        }, 0);
    },
    function rejectHandler1(value){
        console.log("inside rejection handler1 with value",value); 
        console.log("promise after rejection",p);
        setTimeout(function t()  {
            console.log("ended 0s timer")
        }, 0);
        console.log("exitting the reject handler 1")
    }
)


console.log("going to register my 2nd set of handlers"); 

p.then(
    function fulfillHandler2(value){
        console.log("inside fulfill handler 2 with value",value); 
        console.log("promise after fulfillment", p); 
    }, 
    function rejectHandler2(value){
        console.log("inside rejection handler 2 with value", value); 
        console.log("promise after rejection is",p)
    }
)

console.log("Ending....."); 
setTimeout(function()  {
    console.log("global timer of 0s")
}, 1000);
