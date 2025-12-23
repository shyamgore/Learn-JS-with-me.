# Control Flow
- Control flow is a fundamental concept in programming that determines the order in which **statements**, **instructions**, or **function calls** are executed.  
- It allows you to control the flow of your program based on certain conditions or repetitions. 
- In JavaScript, control flow is primarily managed through **conditional statements** and **loops**.
  
## Conditional Statements
Conditional statements allow you to execute different blocks of code based on certain conditions. The main types of conditional statements in JavaScript are:
1. **if statement**: Executes a block of code if a specified condition is true.
   ```js
   let age = 18;
   if (age >= 18) {
       console.log("You are an adult.");
   }
   ```
2. **if...else statement**: Executes one block of code if a condition is true, and another block if it is false.
   ```js    
    let age = 16;
    if (age >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are a minor.");
    }
    ```
3. **else if statement**: Allows you to check multiple conditions.
   ```js    
    let score = 85;
    if (score >= 90) {
        console.log("Grade: A");
    } else if (score >= 80) {
        console.log("Grade: B");
    } else if (score >= 70) {
        console.log("Grade: C");
    } else {
        console.log("Grade: F");
    }
    ``` 
4. **switch statement**: Allows you to execute one block of code among many based on the value of a variable.
   ```js    
    let day = 3;
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        default:
            console.log("Another day");
    }
    ``` 
