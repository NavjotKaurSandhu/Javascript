function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(4);

/**
    To iterate over the object use FOR loop
    If we want only keys not function then we are use below aprocah
 */
for(let key in circle) {
    if(typeof circle[key] != 'function')
        console.log(key, circle[key])
}

/**
   To find all keys including the function if that object contains 
*/
const keys = Object.keys(circle);
console.log(keys);

/**
   Return key and values eg: ['radius', 1], ['draw', f] 
*/
const enteries = Object.enteries(circle);
console.log(enteries);

/**
    To check whether key exist in the object or not
 */
if ('radius' in circle) {
    console.log('Circle has a radius.');
}