# Asynchronous JavaScript   
Asynchronous programming lets code keep running without waiting for long-running tasks to finish.

Normally, JavaScript runs **one line at a time**(it is a **single-threaded** language). But what if one line of code takes too much time to execute? Then all the code after it will also be **delayed.**

This problem is solved using asynchronous programming.

In **async** JavaScript, when some code takes a long time to finish, JavaScript does **not wait** for it. Instead, it **continues running** the next lines of code. When the **long-running** task finally **completes**, its **result** is handled **later**.

This behavior is called Asynchronous JavaScript.
```js
console.log("Start");

setTimeout(() => {
  console.log("Long task done");
}, 2000);

console.log("End");
```
## What’s happening (simple vibe)

1️. JS prints → Start

2️. **setTimeout** says → “I’ll take 2 seconds”

3️. JS says → “Cool. I’ll **run other lines**”

4️. JS prints → **End**

5️. After 2 seconds → **callback runs**

6️. Prints → **Long task done**

This is Asynchronous JavaScript