import { CommissionEmployee } from './CommissionEmployee';
import { BasePlusCommissionEmployee } from './BasePlusCommissionEmployee';
import { SalariedEmployee } from './SalariedEmployee';
import { HourlyEmployee } from './HourlyEmployee';
let employee1 = new CommissionEmployee({
  FirstName: 'Fred',
  LastName: 'Jones',
  SocialSecurityNumber: '111-11-1111',
  grossSales: 2000.0,
  commissionRate: 0.05,
});
let employee2 = new BasePlusCommissionEmployee({
  FirstName: 'Sue',
  LastName: 'Smith',
  SocialSecurityNumber: '222-22-2222',
  grossSales: 3000.0,
  commissionRate: 0.05,
  salary: 300,
});
let employee3 = new SalariedEmployee({
  FirstName: 'Sha',
  LastName: 'Yang',
  SocialSecurityNumber: '333-33-3333',
  salary: 1150.0,
});
let employee4 = new HourlyEmployee({
  FirstName: 'Ian',
  LastName: 'Tanning',
  SocialSecurityNumber: '444-44-4444',
  hoursWorked: 15.0,
  hourlyWage: 50,
});
let employee5 = new HourlyEmployee({
  FirstName: 'Angela',
  LastName: 'Domchek',
  SocialSecurityNumber: '555-55-5555',
  hoursWorked: 20.0,
  hourlyWage: 40,
});
console.log(
  `Employee information.\n${employee1}${employee2}${employee3}${employee4}${employee5}\n`,
);

let empArray = [employee1, employee2, employee3, employee4, employee5];
empArray.forEach(e => {
  if (e instanceof SalariedEmployee) {
    e.raise(0.04);
  } else {
    e.raise(0.02);
  }
});

console.log(
  `Employee information after raises.\n${employee1}${employee2}${employee3}${employee4}${employee5}\n`,
);
