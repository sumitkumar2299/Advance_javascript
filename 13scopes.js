var teacher = "sumit";
function fun(){
    var teacher = "rahul";
    console.log(teacher);
}

function gun(){
    var student = "sarthak";
    console.log(student)
}

fun();
gun();
console.log(teacher);



// compiler -> it compiles whole code 
// interpreter -> it compiles the code line by line. 
//javascript is not purely interpreted and not compiled also. 
/**
 * js executed in two phases 
 * 1-> parsing 
 * scope resolution 
 * in js three types of scope 
 * -> global scope 
 * -> function scope 
 * -> block scope 
 -> in parsing phase js  reads the whole code one by one
 and starts allocating the variable not the values to their corresponding 
 scopes 
 every time we see a formal decleration we think about a 
 scope in parsing phase. 
 * 
 * 
 * 
 * 2 -> execution 
 * 
 * mechanism of autoglobal works when we are assigning the variabel 
 * in the code. 
 */