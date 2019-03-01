## Symbol :

1. They are tokens that serve as unique IDs. 
2. You create symbols via the factory function Symbol()
3. If a symbol has no description, JavaScript engines could use the name of the variable (or property) that a symbol is assigned to.
4. Symbols are mainly used as unique property keys – a symbol never clashes with any other property key (symbol or string).
5. It takes an optional description argument, used only for debugging purposes.
6. Symbols primary use case is for making private object properties, which can be only of type String or Symbol.
7. Using Symbols for object properties is handy for hiding certain properties that might name clash with other libraries.
8. So, they're not entirely private, but they are skipped in common iteration cycles.
    
    ```
    Object.getOwnPropertySymbols(foo) // Symbol()
    Reflect.ownKeys(foo) // Symbol()
    ```
9. Symbol implementations :
    * [`Symbol`](../src/symbol.js)