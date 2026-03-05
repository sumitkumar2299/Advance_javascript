var teacher = "sanket"; // global scope 
function fun(){ // global  
    console.log(teacher); // no error will be given 
    // console.log(content); // throws an error 
    var teacher = "pulkit"; // scope of fun 
    let content = "js";  // content will be access only post decleration 
    if(content == "js"){
        let hours = "120+";
        console.log(hours);
    }
    console.log(teacher,content)
}

fun();
console.log(teacher);
// console.log(content);




// temporal dead zone in javascript. -> it is the reason before the decleration of block scope. 



