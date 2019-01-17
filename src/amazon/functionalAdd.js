const add = function(a, b){
    if (b === undefined){
        return function(b){return a + b}
    }
    return(a+b)
}

console.log(add(2,5))
console.log(add(2)(5))