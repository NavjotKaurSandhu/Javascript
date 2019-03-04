## WeakMap :

1. It is a collection of key/value pairs in which the keys are weakly referenced.
2. There is one datatype we can use to ensure that the property will be private in a class, and it is called WeakMap.
3. It can store a key value pair, where the key is an object and the value can be any datatype or any values.
4. Keys of WeakMaps are of the type Object only. Primitive data types as keys are not allowed (e.g. a Symbol can't be a WeakMap key).
5. WeakMaps provide a way to extend objects from the outside without interfering with garbage collection.
6. Whenever you want to extend an object but can't because it is sealed - or from an external source - a WeakMap can be applied.
7. If the object is destroyed, the garbage collector knows to come and remove the entire entry from the Weakmap thus freeing up memory.
8. WeakMap implementations :
    * [`WeakMap`](../src/weak_map.js)
