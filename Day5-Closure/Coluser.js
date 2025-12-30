function outer() {
  let username = "shyam";
  console.log("End of the outer function")
  return function Inner_function() { //Return refrence of Inner_function() With the binding of veriable uersname
    console.log("Inner function:-", username);
  };
}
let fn = outer();
console.log("fn is: ", fn); // Here we get the refrence of function
fn(); //since fn have the refrence of the Inner funtion it will consloe then username
