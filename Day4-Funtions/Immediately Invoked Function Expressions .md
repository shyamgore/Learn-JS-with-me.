# Immediately Invoked Function Expressions 
IIFE functions are executed immediately after their definition. They are often used to create isolated scopes.
This is use when we don't want to pollute the our funtion  through the goble scope. 

```js
(function IIFE(){
    let a =10;
    let b =10;
    return a+b;

})()
```
## Thinks to remember 
1. We can't add use the entites that is inside the function scope in globle scope but, We can use the globle entites in side the class. Because this is use the lexical scoping.
  - **Globle entites  inside the fuction scope => ✓**
  - **Function entites inside the Globle scope => ✕**
  - **Siblings CANNOT access each other**
  - Example:-
   ```JS
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

   ```

2. When we use the multiple IIFE (more than one), We have to use "**;**" after the end, Because IIFE Don't know where to close.
Example-
```JS
(function greet_Hi(){
    console.log("Hi");
})();
(function greet_hello(){
    Console.log("Hello");
})();

(function greet_Hi(){
    console.log("Hi");
})()
(function greet_hello(){
    Console.log("Hello");
})()
```
## Use Cases Of IIFE
1. Avoid **polluting** the **global namespace**.
2. To create **closures** in JavaScript. (We will Cover this in day5 )
3. IIFE is used to create **private** and  **public** variables and methods.
4. It is used to execute the **async** and **await** function.
5. It is used to work with **require function.** 
  
