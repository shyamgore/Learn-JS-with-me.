# Closure 
**Note:-** Before closures, you should understand **lexical scoping.**

A closure is the concept:

**when a function uses variables from its outer scope AFTER the outer function has finished executing.**

```js
function outer() {
  let username = "shyam";
  console.log("End of the outer function")
  return function Inner() { //Return refrence of Inner_function() With the binding of veriable uersname
    console.log("Inner function:-", username);
  };
}
let fn = outer();
console.log("fn is: ", fn); // Here we get the refrence of function
fn(); //since fn have the refrence of the Inner funtion it will consloe then username
```
- Here we can see that there are two nested functions:
  **1. Outer()**
  **2. Inner()**
- When ``outer()`` runs, it creates a **memory space** for the **variable username** and **stores** its **value**. Normally, when ``outer()`` finishes (line with return), its memory would be **cleared**.
- However, since ``inner()`` still needs **username**, JavaScript keeps that variable **alive** and returns **the reference of ``inner()``** as a function.
- This whole process is called a **``closure``**, where JavaScript keeps the **outer** variables **alive** even after the function has **finished**.