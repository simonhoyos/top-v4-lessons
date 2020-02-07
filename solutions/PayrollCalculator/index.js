// class Employee {
//   constructor(name, bsalary) {
//     this.name = name;
//     this.bsalary = bsalary * 0.88;
//     this.healthPayment = bsalary * 0.04;
//     this.retirementPayment = bsalary * 0.08;
//   }
// }

// class Manager extends Employee {
//   constructor(name, bsalary, bonus) {
//     super(name, bsalary);
//     // this.name = name;
//     // this.salary = salary;
//     this.bonus = bonus;
//   }
// }

// // class Company {
// //   constructor() {
// //     this.employees = [];
// //     this.healthFund = 0;
// //     this.retirementFund = 0;
// //   }

// //   addEmployees() {
// //     for(let employee in arguments) {
// //       this.employees = this.employees.concat(arguments[employee]);
// //     }

// //     return this.employees;
// //   }

// //   generatePayroll() {
// //     // let totalPayment = 0;
// //     return this.employees
// //       .reduce((totalPayment, employee) => {
// //         this.healthFund += employee.healthPayment;
// //         this.retirementFund += employee.retirementPayment;

// //         if(employee.constructor === Manager) {
// //           totalPayment += employee.bonus
// //         }

// //         return totalPayment += employee.salary;
// //       }, 0);
// //       // .forEach(employee => {
// //       //   this.healthFund += employee.healthPayment;
// //       //   this.retirementFund += employee.retirementPayment;

// //       //   totalPayment += employee.salary;

// //       //   if(
// //       //     employee.constructor === Manager
// //       //     employee.bonus !== undefined
// //       //   ) {
// //       //     totalPayment += employee.bonus
// //       //   }
// //       // });

// //     // return totalPayment;
// //   }
// // }

// // const e1 = new Employee("Pedro", 2300);
// // const e2 = new Employee("Pablo", 3500);
// // const m1 = new Manager("Maria", 5000, 2500);


// // const company = new Company();
// // company.addEmployees(e1, e2, m1);
// // console.log(company.employees);
// // console.log(company.generatePayroll()); // 2024 + 3080 + 6900 = 12004

// // console.log(company.healthFund); // 92 + 140 + 200 = 432
// // console.log(company.retirementFund); // 184 + 280 + 400 = 864

// // console.log(company.generatePayroll()); // 12004
// // console.log(company.healthFund); // 432 + 432 = 864
// // console.log(company.retirementFund); // 864 + 864 = 1728

class Company{
  constructor(){
      this._healthFund = 0
      this._retirementFund = 0
      this._employees = []
  }
  generatePayroll(){
      this.setHealthFund()
      this.setRetirementFund()
      return this.geEmployees().map(emp => emp.fullSalary).reduce( (acc, cur) => acc+cur)
  }
  addEmployees(newEmployee){
      this._employees.push(newEmployee)
  }
  geEmployees(){
      return this._employees
  }
  setHealthFund(cb){
      this._healthFund += this.geEmployees().map(emp => emp.baseSalary *0.04).reduce( (acc, cur) => acc+cur ,0)
  }
  getHealthFund(){
      return this._healthFund
  }
  setRetirementFund(cb){
      this._retirementFund += this.geEmployees().map(emp => emp.baseSalary *0.08).reduce( (acc, cur) => acc+cur ,0)
  }
  getRetirementFund(){
      return this._retirementFund
  }
}
class Person{
  constructor(id, name, baseSalary, bonus=0){
      this.id = id
      this.name = name
      this.baseSalary = baseSalary
      this.fullSalary = (baseSalary - (baseSalary *0.12)) + bonus
  }
}
class Employee extends Person{
  constructor(id, name, salary){
      super(id, name, salary)
  }
}
class Manager extends Person{
  constructor(id, name, salary, bonus){
      super(id, name, salary, bonus)
      this.manageTeam = []
  }
  addNewTeam(team){
      this.manageTeam.push(team)
  }
  removeTeam(){
  }
}
class Team{
  constructor(name){
      this.id = 0
      this.name = name
      this.menbers = []
  }
  addMenber(employee){
      this.menbers.push(employee)
  }
  removeMenber(){
      this.menbers
  }
}
// -------------- INSTANCE OF COMPANY --------------------
const myCompany = new Company()
// -------------- INSTANCE OF EMPLOYEES --------------------
const emp1 = new Employee(1, 'Juan', 2300)
const emp2 = new Employee(2, 'Ana', 3500)
const emp3 = new Manager(3, 'Carmen', 5000, 2500)
// -------------- ADD EMPLOYEES --------------------
myCompany.addEmployees(emp1)
myCompany.addEmployees(emp2)
myCompany.addEmployees(emp3)
// ---------- INSTANCE OF TEAM AND ADD TO THE TEAM ------
const myTeam = new Team('Make It')
emp3.addNewTeam(myTeam)
myTeam.addMenber(emp1)
const yourTeam = new Team('The Winners')
emp3.addNewTeam(yourTeam)
yourTeam.addMenber(emp1)
yourTeam.addMenber(emp2)
console.log(myTeam.menbers)
console.log(yourTeam.menbers)
console.log(emp3.manageTeam)
console.log(myCompany.generatePayroll())
console.log(myCompany.getHealthFund())
console.log(myCompany.getRetirementFund())
console.log('-----------------------------')
console.log(myCompany.generatePayroll())
console.log(myCompany.getHealthFund())
console.log(myCompany.getRetirementFund())
console.log(myCompany.geEmployees())
console.log('--------------------------------------------------------------')
console.log(myCompany.geEmployees()[2])
console.log('--------------------------------------------------------------')
console.log(myCompany.geEmployees()[2].manageTeam[1])

