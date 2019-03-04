
/**
  Object Categories of Types
  1. Value Types : Primitives
  2. Reference Types
  
  1. Value Types
    # Number
    # String
    # Boolean
    # Symbol new in ES6
    # undefined
    # null

  2. Reference Types
    # Object
    # Function
    # Array
 */

 // Value or primitive types
 let x = 10;
 let y = x; // X value is copied into y because both are independent to each other

 x = 20;

 /** 
    Output :
    x = 20
    y = 10
  */


  // Reference types : In this case in xx instead of value it is storing refernce or address of xx object so when we copies xx into yy, in yy address of xx got copied instead of values. Both xx and yy pointing to same address or refernce 

  let xx = {val: 10};
  let yy = xx;

  xx.val = 20;

/** 
    Output :
    xx = {val = 20}
    yy = {val = 20}
*/


/** 
    Primitives are copied by their values
    Objects are copied by their reference    
*/
  
// Independent coping of varibles
let number = 10;

function increase(number) {
    number++; // This independent to the `number` variable we have defined globally
}

increase(number);
console.log(number)

/** 
    Output :
    10
*/

// Object passed as reference : 2 variable pointing to same reference
let obj = {val:10};

function increase1(obj) {
    obj.val++;
}

increase1(obj)
console.log(obj);

/** 
    Output :
    11
*/