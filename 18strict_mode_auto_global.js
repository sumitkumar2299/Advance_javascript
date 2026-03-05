/**
 * strict mode => it stops the creation of autoglobal 
 * but it creates problem in the production level code 
 */

"use strict";

var teacher = "sanket";
function fun(){
    var teacher = "pulkit";
    content = "js";
    console.log(teacher);
    console.log(content);
}

function gun(){
    var studnent = "sarthak";
    console.log(student);
}

fun();
gun();

console.log(teacher);
console.log(content);

