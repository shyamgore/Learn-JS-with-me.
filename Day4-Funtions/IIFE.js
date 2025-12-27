let globalVar = "I am global";
(function () {
let functionVar = "I am inside IIFE";
function childOne() {
 let childOneVar = "Child One secret";
 console.log(globalVar);     // ✓ Global inside function
 console.log(functionVar);   // ✓ Parent inside child
}
function childTwo() {
 let childTwoVar = "Child Two secret";
 console.log(globalVar);     // ✓ Global inside function
 console.log(functionVar);   // ✓ Parent inside child
 // console.log(childOneVar); // ✕ Siblings cannot access each other
}
childOne();
childTwo();
// console.log(childOneVar);   // ✕ Parent cannot access child
})();


(function greet_Hi(){
    console.log("Hi");
})()
(function greet_hello(){  //TypeError: (intermediate value)(...) is not a function
    Console.log("Hello");
})()
