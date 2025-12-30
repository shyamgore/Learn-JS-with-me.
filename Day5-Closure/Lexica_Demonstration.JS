// function username() {
//   let username = "shyam";
//   function Inner_function() 
//   {
//     function Inner_most_function() 
//     {
//       console.log("Inner most function:-", username);
//     }
//     console.log("Inner function:-", username);
//     Inner_most_function();
//   }
//   Inner_function();
// }
// username(); 



// function username() {
//   Inner_function();
//   function Inner_function() 
//   {
//     let username = "shyam";
//   }
//     console.log("Inner function:-", username); //This will give "Inner function:- [Function: username]"
// }
// username(); 


// function username() {
//   Inner_function();
//   function Inner_function() 
//   {
//   }
//   function Inner_function1(){
//     console.log("Inner function:-", username); //This will Inner function:- [Function: username].
//   }
//   Inner_function1()
// }
// username();