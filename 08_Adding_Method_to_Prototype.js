 function Student(name){
    this.name = name;
 }

 Student.prototype.printDetails =function(){
    console.log(`Helllo, My Name is ${this.name}`);

 }
 const Student1=new Student("Amin Khan");
 Student1.printDetails();