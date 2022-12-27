// write a functoin that gets a number as argument and returns an array containing that many numbers from the fibonacci sequence

// make a function named fibs which takes a n (number) as argument
// make a array named result to store results inside it later
// if n = 0 
// return array
// make a loop that runs as many time as the n
// in each loop check if iteration namber is less than equal to 1
// if its true then add the i to the array
// if its false 
// push array[i-1] + array[i-2] 
function fibs(n){
    const result = []
    if(n == 0) {
        return result
    }
    for(let i =0 ; i < n; i++) {
        if(i <= 1) {
            result.push(i)
        } else {
            result.push((result[i - 1] + result[i- 2]))
        }
    }
    return result
}
// console.log(fibs(10))

// make a function called fibsRec which takes a n as argument
// check if n <= 2
// if its true return [0,1]
// if its false
// declare a variable to store the result
// call the function with n-1 as argument and store it inside result variable
// push result[(n-3) + (n-2)] inside result
// return result 

function fibsRec(n){
    if(n <= 2) {
        return [0,1]
    } else {
        let result = fibsRec(n-1)
        result.push(result[n-3] + result[n-2])
        return result
    }
}
console.log(fibsRec(8))