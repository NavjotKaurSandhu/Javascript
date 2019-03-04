// There is problem with object literal that lot of duplicate code will be available which is not good practice

// Suppose we want to create 2 different circle object then we need to create mutliple Object literals which include property and method. So method and property duplication will be there. In case if we have an issue in our method, then we have to fix it in multiple places which is not good in case if we have a method with 1000 lines of code.

// There can be a case where the object contain multiple method so we need to repeat all these functionality in all places

// If we have object with multiple behaviors then we should use factory or construtor

// Factory function
function createCircle(radius) {
    return {
        // radius: radius, we can replace with as follow as per new ECMAscript standard
        radius,
        location: {
            x: 1,
            y: 1
        },
        draw() {
            console.log('Draw factory')
        }
        // draw: function() {
        //     console.log('Draw factory')
        // }
    };
}

const circle = createCircle(2);
circle.draw();

const circle1 = createCircle(3);
circle1.draw();