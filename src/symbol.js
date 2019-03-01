console.log('1. ', Symbol('foo') === Symbol('foo'));
console.log('2. ', Symbol.for('foo') === Symbol.for('foo'));

var myObj = {};
var fooSymbol = Symbol.for('foo');
var otherSymbol = Symbol.for('foo');
myObj[fooSymbol] = 'baz';
myObj[otherSymbol] = 'bing';

console.log('3. ', fooSymbol === otherSymbol);
console.log('4. ', myObj[fooSymbol]);
console.log('5. ', myObj[otherSymbol] === 'bing');

// var iframe = document.createElement('iframe');
// iframe.src = String(window.location);
// document.body.appendChild(iframe);
// console.log('6. ', iframe.contentWindow.Symbol === Symbol);
// console.log('7. ', iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo'));