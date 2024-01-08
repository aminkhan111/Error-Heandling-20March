class Employee
{
    constructor(name, position, salary,workingat){
        this.name = name;
        this.position = position;
        this.salary = salary;        
        this.workingat=workingat;
    }
    getsalary(){
        return this.salary;
    }
    getDetails(){
        return `Name:${this.name} work as: ${this.position} Having Salary: ${this.salary} Working at:${this.workingat}`;
      }
    }

const employee = new Employee("Abdul Amin Khan", "Web Developer", 100000 ,"Sigma Infotech Solution pvt.Ltd");

    console.log(employee.getsalary());
    console.log(employee.getDetails());


