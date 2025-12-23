# JavaScript For Loop
- The `for` loop is a control flow statement consists of three main parts: initialization, condition, and increment/decrement.
- example:
```js
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}
```
## Parts of a For Loop
1. **Statement 1**: Initializing the counter variable.
   - Statement 1 is used to initialize the counter variable. A counter variable is used to keep track of the number of iterations in the loop. You can initialize multiple counter variables in statement 1.
   - Example:
   ```js
    let x = 2;

    for (; x <= 4; x++) {
    console.log("Value of x:" + x);
    }
   ```


2. **​Statement 2**: Testing Condition
    - This statement checks the boolean value of the testing condition. If the testing condition is true, the for loop will execute further, otherwise loop will end and the code outside the loop will be executed. It is executed every time the for loop runs before the loop enters its body.

    - This is also an optional statement and JavaScript treats it as true if left blank. If this statement is omitted, the loop runs indefinitely if the loop control isn't broken using the break statement. It is explained below in the example.
   - Example:
   ```js
    for (let i = 0; ; i++) { // testing condition is omitted
         if (i >= 5) { // breaking the loop using break statement
              break;
         }
         console.log("Iteration number: " + i);
    }
    ```
3. **Statement 3**: Incrementing/Decrementing the Counter Variable
    - This statement is used to update the counter variable after each iteration of the loop. It is executed after the loop body has been executed.
    - You can increment or decrement the counter variable using various operators like `++`, `--`, `+=`, `-=`, etc.
   - Example:
   ```js
    for (let i = 0; i < 5; i += 2) { // incrementing by 2
         console.log("Iteration number: " + i);
    }
    ```
## Here are some another loops in JavaScript:

| Loop Type | Syntax Example |
|----------|----------------|
| for loop | ```js\nfor (let i = 0; i < 5; i++) {\n  console.log(i);\n}\n``` |
| while loop | ```js\nlet i = 0;\nwhile (i < 5) {\n  console.log(i);\n  i++;\n}\n``` |
| do-while loop | ```js\nlet i = 0;\ndo {\n  console.log(i);\n  i++;\n} while (i < 5);\n``` |
| for...of loop | ```js\nconst arr = [1, 2, 3];\nfor (const value of arr) {\n  console.log(value);\n}\n``` |
| for...in loop | ```js\nconst obj = { a: 1, b: 2 };\nfor (const key in obj) {\n  console.log(key, obj[key]);\n}\n``` |
