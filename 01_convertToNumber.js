function convertToNumber(str){
    try{
        const Result=parseInt(str);
if   (isNaN(Result)){
    throw new Error("Invalid number");
}
return Result;
    }
 catch(error){
     return error.message;
 }

}

// Example usage:
console.log(convertToNumber("123")); // Output: 123
console.log(convertToNumber("abc")); // Output: Invalid number