// a='javaScript'
// b=10

//scope.js
// let a = 'JavaScript' // is a global scope it will be found anywhere in this file
// let b = 10 // is a global scope it will be found anywhere in this file
// // Function scope
// function letsLearnScope() {
//   console.log(a, b) // JavaScript 10, accessible
//   let value = false
// // block scope
//   if (true) {
//     // we can access from the function and outside the function but 
//     // variables declared inside the if will not be accessed outside the if block
//     let a = 'Python'
//     let b = 20
//     let c = 30
//     let d = 40
//     value = !value
//     console.log(a, b, c, value) // Python 20 30 true
//   }
//   // we can not access c because c's scope is only the if block
//   console.log(a, b, value) // JavaScript 10 true
// }
// letsLearnScope()
// console.log(a, b) // JavaScript 10, accessible

//scope.js
function letsLearnScope() {
    var gravity = 9.81
    console.log(gravity)
  
  }
  letsLearnScope()
//   console.log(gravity) //, Uncaught ReferenceError: gravity is not defined

for(var i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
  }
  console.log(i) // 3