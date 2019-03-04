let typedArr = new Uint8Array([1, 2, 3]);
console.log(typedArr.length);

/*
1. Typed array views act like single-type arrays to a segment of an ArrayBuffer. There are views for all the usual numeric types, with self-descriptive names like Float32Array, Float64Array, Int32Array and Uint8Array. There's also a special view which has replaced the pixel array type in Canvas's ImageData: Uint8ClampedArray.

2. DataView is the second type of view and it is meant for handling heterogeneous data. Instead of having an array-like API, the DataView object provides you a get/set API to read and write arbitrary data types at arbitrary byte offsets. DataView works great for reading and writing file headers and other such struct-like data.
*/

// Typed array views work pretty much like normal arrays.
var f64a = new Float64Array(8);
f64a[0] = 10;
f64a[1] = 20;
f64a[2] = f64a[0] + f64a[1];

// Typed array views using Array Buffer
var ab = new ArrayBuffer(256); // 256-byte ArrayBuffer.
var faFull = new Uint8Array(ab);
var faFirstHalf = new Uint8Array(ab, 0, 128);
var faThirdQuarter = new Uint8Array(ab, 128, 64);
var faRest = new Uint8Array(ab, 192);

// Data view
var dv = new DataView(buffer);
var vector_length = dv.getUint8(0);