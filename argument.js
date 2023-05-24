// //argument 01:

// function allAllNumber(num1, num2) {
//   console.log(arguments);
// }

// function allAllNumber(num1, num2) {
//    //console.log(arguments[5]);
// let total = 0;
// for (const number of arguments) {
//     total = total + number;
// }
// return total;
// }
// const result = allAllNumber(23, 45, 7, 89, 4, 5, 6, 8, 7, 99);
//  console.log(result);


// //argument 02:
function allStudentNameCollect(firstName) {
  let name = '';
  for (const student of arguments) {
    name = name + student + ' ';
  }
  return name;
}

const nameAdded = allStudentNameCollect('mahmuda', 'jayed',
  'summonrahman', 'adiba', 'arman');
console.log(nameAdded);
  



/*
JavaScript functions have a built-in object called the arguments object.
The argument object contains an array of the arguments used when the function was called (invoked).
This way you can simply use a function to find (for instance) the highest value in a list of numbers.
Or create a function to sum all input values.
If a function is called with too many arguments (more than declared), these arguments can be reached using the arguments object.
Arguments are Passed by Value
The parameters, in a function call, are the function's arguments.
JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.
If a function changes an argument's value, it does not change the parameter's original value.
Changes to arguments are not visible (reflected) outside the function.
 */ 