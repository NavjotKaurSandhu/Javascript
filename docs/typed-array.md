
## TypedArray :

1. It is used for handling binary data.
2. Types of binary data :
    1. Processing binary data : Manipulating image data in HTML canvas elements, parsing binary files, handling binary network protocols, etc.
    2. Interacting with native APIs : Native API's receive and return data in binary format, which you could neither store nor manipulate well in traditional JavaScript. That meant that whenever you were communicating with such an API, data had to be converted from JavaScript to binary and back, for every call. Eg: WebGL
3. Two kinds of objects work together in the Typed Array API: 
    * Buffers : Instances of ArrayBuffer hold the binary data.
    * Views : Provide the methods for accessing the binary data. There are two kinds of views:
         - An instance of a Typed Array constructor (Uint8Array, Float64Array, etc.) works much like a normal Array, but only allows a single type for its elements and doesn’t have holes.
         - An instance of DataView lets you access data at any byte offset in the buffer, and interprets that data as one of several types (Uint8, Float64, etc.).
4. Syntax :
   
   ```
       new TypedArray(); // new in ES2017
       new TypedArray(length);
       new TypedArray(typedArray);
       new TypedArray(object);
       new TypedArray(buffer [, byteOffset [, length]]);

       where TypedArray() is one of:

       Int8Array();
       Uint8Array();
       Uint8ClampedArray();
       Int16Array();
       Uint16Array();
       Int32Array();
       Uint32Array();
       Float32Array();
       Float64Array();
     ```
5. TypedArray implementations :
    * [`TypedArray`](../src/typed_array.js)
