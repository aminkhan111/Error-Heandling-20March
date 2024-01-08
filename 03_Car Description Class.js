class car{
    constructor(company,model,year){
        this.company = company;
        this.model = model;
        this.year =year;
    }
getDescription(){
    return`This is a ${this.year} ${this.company} ${this.model}. `;

     }
   }  

   const myCar = new car("Mahindra", "Thar(4x4)", 2024);

   console.log(myCar.getDescription());