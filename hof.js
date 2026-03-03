// higher order function 

function f(x,fn){
    /**
     * x-> number 
     * fn -> another function 
     */
    console.log(x);
    fn();
}

f(10,function exec(){
    console.log("i am an expression passed to a higher order function ");
})


let arr = [1,10,20,8,6,4,9,5,72,7,27,] // unsorted array 
arr.sort();

// it sorts the given array 
// expectation -> this might arrange elements in increasing order 
// default implementation of arr.sort() is going to sort my array in 
// lexicographical order. 

/**
 * 0-> A
 * 1-> B 
 * . 
 * . 
 * .
 * 9 -> J
 * 
 * 
 * [B, BA, J, BAA, BAAA, BB, BC, BD, BE, C, D] // if we arrange it according to dictionary 
 * 
 */

console.log(arr);


let b  = [1,10,20,8,6,4,9,5,72,7,27,] 

// sort b in increasing order 

b.sort(function(a,b){
        return a-b;
    })

// sort is a hof, the sort function takes a comparator function as an argument 
console.log(b);


