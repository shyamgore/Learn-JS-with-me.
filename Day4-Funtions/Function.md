# Funtions in JavaScript
Functions are reusable blocks of code that perform a specific task. 
 They help in organizing code, improving readability, and reducing redundancy.
## Types of Functions

1. **Named Functions**: 
   - These functions have a specific name and can be called using that name.
        ```js
        function greet() {
            console.log("Hello, World!");
        }
        greet(); // Calling the function
        ```
2. **Anonymous Functions**:
   - These functions do not have a name and are often used as arguments to other **functions or assigned to variables.**
        ```js
        const greet = function() {
            console.log("Hello, World!");
        };
        greet(); // Calling the function
        ```
3. **Arrow Functions**: 
   - A shorter syntax for writing functions, **introduced in ES6.**
        ```js
        const greet = () => {
            console.log("Hello, World!");
        };
        greet(); // Calling the function
        ```
4. **Callback Functions**:
   - Functions that are **passed as arguments** to other functions and are executed after some operation is completed.
        ```js
        function num(n, callback) {
        return callback(n);
        }

        const double = (n) => n * 2;

        console.log(num(5, double));
        ```
5. **Constructor Functions**:
   - Used to create **objects**. They are defined using the **`function`** keyword and are called with the **`new`** keyword.
        ```js
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }

        const person1 = new Person("Alice", 30);
        console.log(person1.name); // Output: Alice
        ```
6. **Async Functions**:
   - Functions that return a** Promise** and allow the use of **`await**` for asynchronous operations.
        ```js
        async function fetchData() {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            console.log(data);
        }
        fetchData();
        ```
7. **Generator Functions**:
   - Functions that can be paused and resumed, using the `function*` syntax and the `yield` keyword. used for pausing and resuming execution.
        ```js
        function* generatorFunction() {
            yield 1;
            yield 2;
            yield 3;
        }

        const gen = generatorFunction();
        console.log(gen.next().value); // Output: 1
        console.log(gen.next().value); // Output: 2
        console.log(gen.next().value); // Output: 3
        ```
8. **Reset parameters Functions**:
   - Function that Uses `...` to collect all remaining arguments into an array. Very useful when you don’t know how many arguments will be passed.
   ```js
        function sum(...numbers) {
            return numbers.reduce((acc, curr) => acc + curr, 0); // Using reduce to sum all numbers. that we    Will see later in day6
        }

        console.log(sum(1, 2, 3, 4)); // Output: 10
        ```
This all are the basic types of functions in JavaScript. Functions can also accept parameters and return values, making them versatile for various programming tasks. 