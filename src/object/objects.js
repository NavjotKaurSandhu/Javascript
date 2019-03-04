// 1. The simplest way to create an object is using an object literal 
const circle = { 
   radius: 1, 
   draw: function() {}
}; 
   
// To create multiple objects with the same structure and behaviuor (methods), use a factory or a constructor. 

// 2. Factory function 
function createCircle(radius) { 
   return {
      radius, 
      draw: function() {}
   } 
} 

// 3. Constructor function 
function Circle(radius) { 
    this.radius = radius; 
    this.draw = function() {}
}

///////////////////////////////////////////
// Every object has constructor property
// Every object has default constructor properties
// In JS, all functions are object
///////////////////////////////////////////

// Factory Function 
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw function');
        }
    }
}

const circle = createCircle(1);
// Internal it looks like : const circle = new Object();

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Constructor function');
    }
}

const another = new Circle(3);

// Object Literal
let x = {};

// let x = new Object();

// Builtin Objects 
new String() // '', "", ``
new Boolean() // true, false
new Number() // 1, 3, 4

// Every object has a "constructor" property which returns the function that was used to construct or create that object. 
const x = {};
x.constructor; // returns Object() 
   
// In JavaScript, functions are objects. They have properties and methods. 
Circle.name;  // name of function
Circle.length; // no of argument
Circle.constructor; // returns Function()

// Use function contructor to create this object 
// eg: Internally we will get object as below
// const circle1 = new Function('radius', `
//     this.radius = radius;
//     this.draw = function() {
//         console.log('Constructor function');
//     }
// `);

Circle.call({}, 1); // to call the Circle function => this will refernce to {} object
// Internally const another = new Circle(1) ====> Circle.call({}, 1)
Circle.apply({}, [1]); // exactly same like call but only difference is instead of passing multiple argument in call second param, we will pass as an array in apply second param
   
// JavaScript objects are dynamic. You can add/remove properties: 
circle.location = {};
circle['location'] = {};
                      
delete circle.location; 
                      
// To enumerate the members in an object: 
for (let key in circle) console.log(key, circle[key]);

Object.keys(circle); 
                      
// To see if an object has a given property
if ('location' in circle)

// Cloning objects 

// 1. Method

const anotherC = {};
for (let key in circle) {
    anotherC[key] = circle[key];
}

// 2. Method

const anotherD = Object.assign({}, circle);

// 3. Method 

constE = {...circle};

// Abstraction means hiding the complexity/details and showing only the essentials. 
// We can hide the details by using private members. Replace "this" with "let". 

function Circle(radius) { 
   // Public member 
   this.radius = radius; 

   // Private member                       
   let defaultLocation = {};                      
}                       

// To define a getter/setter, use Object.defineProperty():

Object.defineProperty(this, 'defaultLocation', {
    get: function() { return defaultLocation; },
    set: function(value) { defaultLocation = value; }
});
