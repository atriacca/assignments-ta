const employees = []
function Employee(name, jobTitle, salary, status, printEmployeeForm) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full time";
    this.printEmployeeForm = function(){
        console.log(this)
    };
}
const newEmployee1 = new Employee ("Joe", 42, "$150k");
const newEmployee2 = new Employee ("Diane", 34, "$200k", "Contract");
const newEmployee3 = new Employee ("Pat", 42, "$250k");

employees.push(newEmployee1)
employees.push(newEmployee2)
employees.push(newEmployee3)

for (i = 0; i < employees.length; i++) {
    console.log(employees[i].printEmployeeForm())
}

Employee.prototype.speak = function() {
    console.log("Hi! My name is " + this.name + " and my salary is " + this.salary);
}
var jill = new Employee("Jill", 42, "$150k");
jill.speak();

/*
Instantiate three employees

Override the status attribute of one of them to either "Part Time" or "Contract"

Call the printEmployeeForm method for each employee

Put the generated employees into the employees array using whichever method you prefer.
*/
