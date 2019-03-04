// Using Map

function Obj(){
    this.val = new Array(10000000).join("---")
}

window.obj = new Obj();
var map = new Map()
map.set(window.obj, 123)
delete window.obj

// Using WeakMap

function Obj(){
    this.val = new Array(10000000).join("---")
}

window.obj = new Obj();
var map = new WeakMap()
map.set(window.obj, 123)
delete window.obj