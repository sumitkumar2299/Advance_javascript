console.log("hello world"); 
for(let i = 0; i<3; i++){
    setTimeout(() => {
        console.log("timer done")
    }, 10);
}

for(let i = 0; i<10000000; i++){
    // some task for 10 seconds
}

console.log("end");