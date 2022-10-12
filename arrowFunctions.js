//higher order functions act on other functions...have an effect on them
//or there values
//Example 1: a function that creates another function


function greaterthan(n){
    return m => m > n 
}

let greaterthan10 = greaterthan(10);
console.log(greaterthan10(11));