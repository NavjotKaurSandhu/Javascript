// Object literal : We only need to declare one object if we want to create mutiple circle using same object format.

// Best way to use object literals are where we are declaring multiple variables and functions which belong to one feature that time we can create a Object literals.

// EG:
const circle = {
    radius: 1, // Property
    location: { // Property
        x: 1,
        y: 1
    },
    draw: function() { // Method
        console.log('draw')
    }
};


circle.draw();