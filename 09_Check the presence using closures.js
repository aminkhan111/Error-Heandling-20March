// The numberChecker function takes an numbersArray parameter (an array of numbers).

function NumberChacker(NumbersArray){

 

    return function(num){
        return NumbersArray.includes(num);
    }
}

const checknumber =NumberChacker([1,2,3,4,5,6,7,]);

console.log(checknumber(3));
console.log(checknumber(9));


//
// NumberChacker Function:

// This is a higher-order function that takes an array of numbers (NumbersArray) as a parameter.
// It returns another function (an anonymous function).
// Returned Function:

// The returned function takes a single parameter (num).
// Inside the returned function, it uses the includes method on NumbersArray to check if the provided num is present in the array.
// The includes method returns true if the array contains the specified element, and false otherwise.

