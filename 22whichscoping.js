var teacher = "sanket";  // teacher -> global -> sanket 
function ask(question){  //ask -> global, question -> ask
    console.log(teacher,question);
}

function fun(){  // fun -> global 
    var teacher = 'pulkit'; // teacher -> fun -> pulkit
    ask("why?");
}

fun();


// javascript supports lexical scoping, it doesn't 
// support dynamic scoping. 