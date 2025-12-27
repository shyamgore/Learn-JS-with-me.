# explicit return vs implicit return
- In JavaScript, functions can return values either **explicitly** or **implicitly**.
## Explicit Return
- An **explicit** return occurs when a function uses the **``{}``** and **`return`** statement to return a value.
```js
function add(a, b) {
    return a + b; // Explicit return
}
console.log(add(2, 3)); // Output: 5
```
### Implicit Return
- An **implicit** return occurs in **arrow functions** when the function body is a **single** **expression** and does **not use the ``{}``.**
-  In this case, the value of that expression is **automatically** **returned**.
```js   
const add = (a, b) => a + b; // Implicit return
console.log(add(2, 3)); // Output: 5
```
- **Note:** If you use **``{}``** in an **arrow** function, you **have to use** the **`return`** statement **explicitly**.
