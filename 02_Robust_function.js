function getPerson (person){
// check the object 
try{
if(typeof person !=='object' || !person.hasOwnProperty('name') || !person.hasOwnProperty('age')) 
{
    throw new Error("invalid parameter type Give the R8 Parameter");
}

// if the input is valid  return the formated string

return `Name: ${person.name}, Age: ${person.age}`;


}catch (error) {
    // Handle the error and return the error message
    return error.message;
}

}

// Example usage:
const validPerson = { name: "Amin", age: 24 }; 
const invalidPerson = "This is not a person object";

console.log(getPerson(validPerson));   // Output: Name: John, Age: 25
console.log(getPerson(invalidPerson)); // Output: Invalid parameter type
