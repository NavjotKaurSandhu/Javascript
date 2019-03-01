## TypedArray

[`TypedArray`](docs/typed-array.md)

## Symbol

[`Symbol`](docs/symbol.md)

## WeekMap

[`WeekMap`](docs/week-map.md)

## Global Symbols
1. It is not unique but they do have a purpose.
2. You can use the Symbol.for(key) method to both create and access Global Symbols.
3. Symbol.for(key) : creates a Symbol in a “global Symbol registry”.

## Includes:
1. This method lets you determine whether or not a string includes another string.
2. It is case sensitive method.

## Debounce: 
1. It enforces a function should not be called again untill amount of time has passed without it being called.
2. Execute the function only if 100ms have passed without it being called.
3. It allows us to group mutliple raised sequential functions into a single function.
4. Examples :
   * Debouncing can be applied in implementing suggestive text, where we wait for the user to stop typing for a few seconds before suggesting the text. thus, on every keystroke, we wait for some seconds before giving out suggestions.
   * Another application of debouncing is in content-loading webpages like Facebook and Twitter where the user keeps on scrolling. In these scenarios, if the scroll event is fired too frequently, there might be a performance impact, as it contains lots of videos and images. Thus the scroll event must make use of debouncing.
5. Debounce implementations :
   * [`Debounce`](src/debounce-throttling.js)

## Throttling: 
1. It enforces a maximum number of time a function can be called over time.
2. Execute the function at most once every 100ms.
3. We dont allow to our fuction to excute more than once every X ms. 
4. Throttling implementations :
   * [`Throttling`](src/debounce-throttling.js)

## Timeing Events or Timer: 
1. Timers are used to execute a piece of code at a set time or also to repeat the code in a given interval of time. 
2. This is done by using the functions setTimeout, setInterval and clearInterval.
   * SetTimeout: setTimeout(func, delay in ms): 
       * Delay the execution of a function.
       * It is commonly used if you wish to have your function called once after the specified delay.
       * It sets a timer which executes a function or specified piece of code once the timer expires.
   * SetInterval: setInterval(func, repeat in ms): 
       * Repeating the execution of a function. 
       * It is commonly used to set a delay for functions that are executed again and again, such as animations.
       * It repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
       * A function to be executed every delay milliseconds. 
       * The function is not passed any parameters, and no return value is expected.
   * ClearTimeout/ClearInternval: clearTimeout(setTimoutId):
      * Cancelling the execution of function.
   * SetImmediate: 
      * This method is used to break up long running operations and run a callback function immediately after the browser has completed other operations such as events and display updates.
3. Timer implementations :
   * [`Timer`](src/timer.js)

## Currying
1. There is a way to reduce functions, of more than one argument, to functions of one argument, with the help of lambda calculus, a way called currying.
2. Example :

   ```
      f(n, m) ---> f'(n)(m)
   ```
3. Function.prototype.bind() does partial application actually.
4. Curring Implementations :
    * [`Curring`](src/multiply-with-curry.js)

## Uncurrying
1. Example :

   ```
      f(n)(m) --> f'(n, m);
   ```
2. Uncurring Implementations :
   * [`Uncurring`](src/multiply-with-curry.js)

## Field or Field Proposal : 
1. We will be able to declare private properties by prefixing the properties with the hash symbol (#).
    
    ```
    class Stack {
    
        #count = 0;
        #items = 0;

        // stack methods
    }
    ```
2. [`Find more detail`](http://2ality.com/2017/07/class-fields.html)

## Recursion : 
1. When function call itself again and again.
    
    ```
    function func() {
        if (somecondition) {
            return something;
        } else {
            func();
        }
    }
    ```
2. Recursion implementations :
    * [`Recursion`](src/recursion.js)

## Callstack : 
1. It represents what order out functions are being called in and what variables they're being called with.

## Debounce Vs SetTimeout

1. Debounce returns a function, setTimeout returns an id which you can use to cancel the timeOut.
2. SetTimeout simply waits n milliseconds and the invokes the supplied function. Debounce on the other hand returns a function that only calls the callback after n milliseconds after the last time the functions was called.

## ForEach vs Filter
1. The main difference between forEach and filter is that forEach just loop over the array and executes the callback but filter executes the callback and check its return value.
2. In filter if the value is true element remains in the resulting array but if the return value is false the element will be removed for the resulting array.

## Find vs FindIndex
1. The find method returns the first value of the array that satisfies the proposed condition. 
2. The findIndex method, on the other hand, returns the index of the first value of the array that satisfies the condition.

## WeakMap vs Map :
1. The difference between Map and WeakMap lies in how the objects that are used as keys are treated during garbage collection.
2. In Map, the array of keys would keep references to key objects, preventing them from being garbage collected. In native WeakMaps, references to key objects are held "weakly", which means that they do not prevent garbage collection in case there would be no other reference to the object.
3. Without the Map, running delete window.obj would remove the only reference to the object, and the object would be removed from memory. However, since obj is used as a key in our Map there still is a reference to obj and it can’t be garbage collected.
4. WeakMaps however are different: they act as if there was no additional reference to obj. They only hold a weak reference to obj, meaning that after running removing the obj reference from the window object, obj can be garbage collected.
5. Map allows for arbitrarily named keys where as Weakmap keys are an object which can be either {} or function() {} because function inherit from object.
6. In other words, Key in Map can be anything but Key in WeakMap must be of type Object (not null).
7. Map has size but WeakMap has length.
8. In Map we can use forEach() for iterating but not in WeakMap.
9. Example :
    * [`WeakMap vs Map`](src/weak-map.js)
    
**NOTE: If you run above example in Chrome you can check the difference of memory in DevTools under profiles.**

## Search vs Indexof:
1. IndexOf is for plain substrings but Search can do regular expressions.
2. The search function takes a regular expression, which allows you to match against more sophisticated patters, case-insensitive strings, etc., while indexOf simply matches a literal string.
3. Indexof is case sensitive.


