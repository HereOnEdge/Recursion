// make a function called mergeSort that gets an array as argument
// declare a variable as result to store, obviously result
// check if array length is 1 or smaller
// if it is then push array[0] into result and return result
// if it's not 1 or smaller, devide the array into 2 same sized array(if possible)
// store each side inside a variable as leftSide and rightSide
// run the function with each side as its argument and store its variable inside itself(the leftSide or rightSide variable)
// make a while loop to compare leftSide array items to rightSide items
// let i = 0
// let y = 0
// while i < leftSide.length && y < rightSide.length , check if leftSIde[i] < rightSide[y]
// if its true push the leftSide[i] into result and i++
// if its not true push the rightSide[y] into result and y++

// check if y > rightSide.length
// if its true then make a for loop to push every item from leftSide to result 
// check if i > leftSide.length
// if its true then make a for loop to push every item from rigthSide to result
// return result
function mergeSort(array) {
    console.log('start')
    let result = []
    if(array.length <= 1) {
        result.push(array[0])
        return result
    } else {
        let arrayMiddle = Math.floor(array.length / 2)
        let leftSide = mergeSort(array.slice(0, arrayMiddle))
        let rightSide = mergeSort(array.slice(arrayMiddle))
        let i = 0
        let y = 0
        while (i < leftSide.length && y < rightSide.length) {
            if(leftSide[i] < rightSide[y]) {
                result.push(leftSide[i])
                i++
                continue
            } else {
                result.push(rightSide[y])
                y++
                continue
            }
        }
        if( y >= rightSide.length) {
            while(i < leftSide.length) {
                result.push(leftSide[i])
                i++
            }
        } else if(i >= leftSide.length) {
            while(y < rightSide.length){
                result.push(rightSide[y])
                y++
            }
        } return result
    }
}
console.log(mergeSort([100, 22, 1, 30, 32, 322, 3, 12, 43]))
