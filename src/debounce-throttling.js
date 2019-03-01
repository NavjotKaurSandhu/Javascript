// DEBOUNCE
var dButton = document.getElementById('debounce');
function debounce(func, interval) {
    var timout;

    return function() {
        var context = this, args = arguments;
        console.log('context', context);
        console.log('args', args);
        var later = function() {
            timout = null;
            func.apply(context, args);
        };
        console.log('timout', timout);
        console.log('interval', interval);
        clearTimeout(timout);
        timout = setTimeout(later, interval || 200);
    }
}

var debounce_obj = debounce(function() {
    console.log('debounce called');
}, 1000);
dButton.addEventListener('click', debounce_obj);

// THROTTLE
var tButton = document.getElementById('throttle');
function throttle(func, interval) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        console.log('context', context);
        console.log('args', args);
        var later = function() {
            timeout = false;
        }
        if (!timeout) {
            func.apply(context, args);
            timeout = true;
            setTimeout(later, interval);
        }
        console.log('timout', timeout);
        console.log('interval', interval);
    }
}

var throttle_obj = throttle(function() {
    console.log('Throttled called');
}, 1000);
tButton.addEventListener('click', throttle_obj);