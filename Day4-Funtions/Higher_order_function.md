# JavaScript Higher Order Functions

A higher-order function is a function that does one of the following:

- Takes another **function** as an **argument**.
- Returns another **function** as its **result**.

Higher-order functions are a powerful feature in JavaScript that allows for more **abstract** and **flexible** code. They enable functional programming techniques and can help in creating more **reusable** and **modular code.**

## Popular Higher Order Functions in JavaScript
**1. map**

 - The map function is used to **transform** **an** **array** by applying a callback function **to each element Of an array**. It returns a new array.
  
```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
```
-  map applies the callback (num) => num * num to each element of numbers.
 -  A new array is returned where each element is the square of the original

**2. filter**
    - The filter function is **used to create a new array** containing elements that s**atisfy a given condition**.
        
```js

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]
``` 
- filter applies the callback **(num) => num % 2 === 0** to each element of numbers.
- A new array is returned containing only the even numbers.
  
**3. reduce**
    - The reduce function is used to accumulate a single value from an array by applying a callback function to each element.
```js
    const numbers = [1, 2, 3, 4];
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(sum); // Output: 10