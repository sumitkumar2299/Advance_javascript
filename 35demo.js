function timeConsumingByLoop(){
    console.log("loop starts");
    for(let i = 0; i<10000000;i++){
        // some tasks
    }
    console.log("loop ends");
}
function timeConsumingByRuntimeFeature0(){
    console.log("starting timer");
    setTimeout(function exec() {
        console.log("completed the timer 0")
        for(let i = 0; i<10000000; i++){
            // do some task
        }
    }, 5000);
};


function timeConsumingByRuntimeFeature1() {
    console.log("Starting timer");
    setTimeout(function exec() {
        console.log("Completed the timer1");
        // while(true) {}
    }, 200); // 0 s timer
}

function timeConsumingByRuntimeFeature2() {
    console.log("Starting timer");
    setTimeout(function exec() {
        console.log("Completed the timer2");
    }, 200); // 200 ms timer
}


console.log("Hi");
timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();
console.log("By");


