const { CommissionEmployee } = require('./CommissionEmployee');
const { BasePlusCommissionEmployee } = require('./BasePlusCommissionEmployee');
const { SalariedEmployee } = require('./SalariedEmployee');
const { HourlyEmployee } = require('./HourlyEmployee');
let employee1 = new CommissionEmployee(
  'Fred',
  'Jones',
  '111-11-1111',
  2000.0,
  0.05,
);
let employee2 = new BasePlusCommissionEmployee(
  'Sue',
  'Smith',
  '222-22-2222',
  3000.0,
  0.05,
  300,
);
let employee3 = new SalariedEmployee('Sha', 'Yang', '333-33-3333', 1150.0);
let employee4 = new HourlyEmployee('Ian', 'Tanning', '444-44-4444', 15.0, 50);
let employee5 = new HourlyEmployee(
  'Angela',
  'Domchek',
  '555-55-5555',
  20.0,
  40,
);
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
