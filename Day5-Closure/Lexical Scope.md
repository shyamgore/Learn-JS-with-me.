# Lexical Scope
 Generally, in JavaScript, a variable inside a function scope is not available outside the function.
 ``` js
 function username ()
 {
    Let username = "shyam";
    console.log("Inside",username);
 }
 Conosol.log("outside",username); // This will Give the ReferenceError: Conosol is not defined
 username();
 ```
 In the previous example, we see a **ReferenceError** because the variable username is **out of scope** for the ```console.log("outside", username)``` statement. This behavior is expected, as we studied in **local scope.**

## Lexical Scope
 However, in lexical scoping, things change.

In this type of scoping, child functions can **access** the **variables** of their **parent** and **grandparent** functions. This happens because JavaScript **functions remember** the **scope** in which they were **defined**, not where they are **called**.

Let’s understand this with an example.
 ```Js 
 function username() {
  let username = "shyam";
  function Inner_function() 
  {
    function Inner_most_function() 
    {
      console.log("Inner most function:-", username);
    }
    console.log("Inner function:-", username);
    Inner_most_function();
  }
  Inner_function();
}
username(); //Output will be "Inner function:- shyam"
 ```
In the example above, we can see that ```Inner_most_function``` can access the variable ```username```, which is declared in its grandparent function. This is possible due to lexical scope.
## Things to remember in the lexical scoping
1. Lexical scoping does **not work** in **reverse**.
That means parent or grandparent functions cannot access variables declared inside child or grandchild functions.-
```js

function username() {
  Inner_function();
  function Inner_function() 
  {
    let username = "shyam";
  }
    console.log("Inner function:-", username); //This will give "Inner function:- [Function: username]"
}
username(); 
```
In the example shown, the variable ```username``` is declared inside ```Inner_function```, so it is not accessible in the outer ```username()``` function. Therefore, JavaScript refers to the function name username itself, resulting in the output ```[Function: username]```.
1. Lexical scoping also does **not work** between functions at **the same level**
Example:- 
```js
function username() {
  Inner_function();
  function Inner_function() 
  {
  }
  function Inner_function1(){
    console.log("Inner function:-", username); //This will Inner function:- [Function: username].
  }
  Inner_function1()
}
username();
```
In this case, ``Inner_function1`` cannot access variables from ``Inner_function`` because both are **siblings**, not parent–child. JavaScript does not share **scope** between **sibling** functions.