class person{
    constructor(name="Unknown", age=0){
        this.name=name;
        this.age=age;

    }
    getDetails(){
        return `Name:${this.name}, Age: ${this.age}`;
    }
 }

const person1=new person("Amin",24);
console.log(person1.getDetails());
const person2=new person();
console.log(person2.getDetails());


