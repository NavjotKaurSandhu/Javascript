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

## Field or Field Proposal : 
1. We will be able to declare private properties by prefixing the properties with the hash symbol (#).
    
    ```
    class Stack {
    
        #count = 0;
        #items = 0;

        // stack methods
    }
    ```
    
 [`Find more detail`](http://2ality.com/2017/07/class-fields.html)

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
