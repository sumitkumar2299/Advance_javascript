if(false){
    var x = 10;
}

console.log(x);

// var only supports function scope and global scope 

function fun(){
    console.log(y); // y is accesible here 
    var y = 10;
}

// y is  not accesible outside the function 

console.log(y);



 
function gun(){
    console.log(z);
    let y = 10;

}
console.log(z);
gun();