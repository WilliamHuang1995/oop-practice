"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommissionEmployee_1 = require("./CommissionEmployee");
var BasePlusCommissionEmployee_1 = require("./BasePlusCommissionEmployee");
var SalariedEmployee_1 = require("./SalariedEmployee");
var HourlyEmployee_1 = require("./HourlyEmployee");
var employee1 = new CommissionEmployee_1.CommissionEmployee({
    FirstName: 'Fred',
    LastName: 'Jones',
    SocialSecurityNumber: '111-11-1111',
    grossSales: 2000.0,
    commissionRate: 0.05,
});
var employee2 = new BasePlusCommissionEmployee_1.BasePlusCommissionEmployee({
    FirstName: 'Sue',
    LastName: 'Smith',
    SocialSecurityNumber: '222-22-2222',
    grossSales: 3000.0,
    commissionRate: 0.05,
    salary: 300,
});
var employee3 = new SalariedEmployee_1.SalariedEmployee({
    FirstName: 'Sha',
    LastName: 'Yang',
    SocialSecurityNumber: '333-33-3333',
    salary: 1150.0,
});
var employee4 = new HourlyEmployee_1.HourlyEmployee({
    FirstName: 'Ian',
    LastName: 'Tanning',
    SocialSecurityNumber: '444-44-4444',
    hoursWorked: 15.0,
    hourlyWage: 50,
});
var employee5 = new HourlyEmployee_1.HourlyEmployee({
    FirstName: 'Angela',
    LastName: 'Domchek',
    SocialSecurityNumber: '555-55-5555',
    hoursWorked: 20.0,
    hourlyWage: 40,
});
console.log("Employee information.\n" + employee1 + employee2 + employee3 + employee4 + employee5 + "\n");
var empArray = [employee1, employee2, employee3, employee4, employee5];
empArray.forEach(function (e) {
    if (e instanceof SalariedEmployee_1.SalariedEmployee) {
        e.raise(0.04);
    }
    else {
        e.raise(0.02);
    }
});
console.log("Employee information after raises.\n" + employee1 + employee2 + employee3 + employee4 + employee5 + "\n");
