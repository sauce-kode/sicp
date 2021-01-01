const sum_of_two_larger_numbers = (num1, num2, num3) => {
    return greater_or_equal (num1, num2) ? 
        (greater_or_equal (num2, num3) ? sum_of_squares(num1, num2) : sum_of_squares(num1, num3)) :
        sum_of_squares(num2, num3)       
}

const sum_of_squares = (num1, num2) => {
    return square_of_number(num1) + square_of_number(num2)
}

const square_of_number = (num) => {
    return num * num
}

const greater_or_equal = (num1, num2) => {
    return !(num1 < num2)
}

console.log(sum_of_two_larger_numbers(2, 2, 2))

/** Alternative solution
 *  
 * use formula x2 + y2 + z2 - min(x2 + y2 + z2)
 * 
 * todo: write min function
 * 
 */