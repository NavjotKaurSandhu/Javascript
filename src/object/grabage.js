// In C/C++, we have a concept to allocate and decollate memory but in JS we don't have concept
// Once we intialize the object memory automatically get allocate, we can use the object once we are done using it we dont have to deallocate the memory

// The job of grabage collector is to find the variables and constants that are no longer used and then deallocate the memory that was allocate to them earlier.

let cc = {};
console.log(cc);