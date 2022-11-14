/*
1. check for triple equality
2. keys equality, check for the length of keys in both
3. values equality
*/

function objectsEqual(obj1, obj2) {
    if (obj1 === obj2) return true;

    // keys equality
    // values equality

    return (keysEquality(obj1, obj2) && valuesEquality(obj1, obj2))
}

function keysEquality(obj1, obj2) {
    let keys1 = Object.getOwnPropertyNames(obj1).sort();
    let keys2 = Object.getOwnPropertyNames(obj2).sort();

    if (keys1.length !== keys2.length) return false;

    return keys1.every((key, index) => 
        key === keys2[index]
    )
}

function valuesEquality(obj1, obj2) {
    let keys1 = Object.getOwnPropertyNames(obj1).sort();

    return keys1.every((key, idx) => 
        obj1[key] === obj2[key])
}

console.log(objectsEqual({ a: 'foo' }, { a: 'foo' }));                      // true
console.log(objectsEqual({ a: 'foo', b: 'bar' }, { a: 'foo' }));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({ a: 'foo', b: undefined }, { a: 'foo', c: 1 }));  // false