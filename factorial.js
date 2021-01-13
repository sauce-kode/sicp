function factorial(n){
    return n == 1 
        ? 1
        : n * factorial(n - 1)
}

// function factorial (n) {
//     return fact_iter (1, 1, n)
// }

function fact_iter(product, counter, max_count){
    return counter > max_count 
        ? product
        : fact_iter(counter * product, counter + 1, max_count)
}

console.log(factorial(3))