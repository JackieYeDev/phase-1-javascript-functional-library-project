const myEach = function(collection, callback) {
    const c = Array.isArray(collection)?[...collection]:[...Object.values(collection)];
    // Alternatively: c.foreach((e)=>callback(e));
    for(let i=0; i < c.length; i++) {
        callback(c[i]);
    };

    return collection;
};

const myMap = function(collection, callback) {
    const c = Array.isArray(collection)?[...collection]:[...Object.values(collection)];
    let newCollection = [];
    // Alternatively: c.map(function(e){newCollection.push(callback(e))});
    for(let i=0; i<c.length; i++) {
        newCollection.push(callback(c[i]));
    };

    return newCollection;
};

const myReduce = function(collection, callback, acc) {
    const c = Array.isArray(collection)?[...collection]:[...Object.values(collection)];
    let a = 0;
    if(acc === undefined) {
        a = c[0];
        c.shift();
    } else {
        a = acc;
    };

    for(let i=0; i<c.length; i++) {
        a = callback(a, c[i], c);
    };

    return a;
};

const myFind = function(collection, predicate) {
    const c = Array.isArray(collection)?[...collection]:[...Object.values(collection)];
    for(let i=0; i<c.length; i++) {
        if (predicate(c[i])) return c[i];
    }

    return undefined;
};

const myFilter = function(collection, predicate) {
    const c = Array.isArray(collection)?[...collection]:[...Object.values(collection)];
    let newCollection = [];
    for(let i=0; i<c.length; i++) {
        if (predicate(c[i])) newCollection.push(c[i]);
    }

    return newCollection;
};

const mySize = function(collection) {
    const c = Array.isArray(collection)?[...collection]:[...Object.values(collection)];
    // Alternatively: return c.length;
    let i = 0;
    while(c[i] !== undefined) {
        i++;
    }
    return i;
};

const myFirst = function(array, ...n) {
    return n.length === 0 ? array[0] : array.splice(0, n);
}

const myLast = function(array, ...n) {
    return n.length === 0 ? array[array.length-1]: array.splice(-n);   
}

// const mySortBy = function(array, callback) {
    
// }

// const myFlatten = function(array, ...shallow, newArr=[])

const myKeys = function(obj) {
    const keys = [];
    for (let o in obj) {
        keys.push(o);
    }

    return keys;
};

const myValues = function(obj) {
    const values = [];
    for (let o in obj) {
        values.push(obj[`${o}`]);
    }

    return values;
};