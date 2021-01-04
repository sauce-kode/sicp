const sqrt_iter = (guess, x) => {
    return good_enough(guess, x)
        ? guess
        : sqrt_iter(improve(guess, x), x);
}

const improve = (guess, x) => {
    return average(guess, x / guess)
}

const average = (x, y) => {
    return (x+y) / 2
}

const good_enough = (guess, x) => {
    return abs(square(guess) - x) < 0.001
}

const abs = (x) => {
    return x < 0 
        ? (x - 2*x)
        : x;
}

const square = (x) => {
    return x * x
}

const sqrt = (x) => {
    return sqrt_iter(1, x)
}

console.log(sqrt(process.argv.slice(2)))