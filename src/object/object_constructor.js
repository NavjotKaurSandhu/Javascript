// If we have object with multiple behaviors then we should use factory or construtor

// Constructor Function
function Circle(radius) {
    console.log("this = ", this);
    this.radius = radius;
    this.draw = function() {
        console.log('Draw constructor')
    }
}

const circle = new Circle(4);
circle.draw();

/** 
1. If we dont use new keyword to create constructor object then it will use global reference for object :
    E.g : const circle = Circle() then if we see this it will contain window's data in it considered it as global
2. So best practice to use it as :
    const circle = new Circle(4); with this we will not face problem of overwritting values
3. If we use new keyword to create object then following things will happen :
    * Empty object will be created
    * It will set `this` keyword to particular object
    * It will return that object from this function internally like `return this`
*/