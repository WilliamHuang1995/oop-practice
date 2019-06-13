import { Employees } from "./Employees";
class BasePlusCommissionEmployee extends Employees {
  private grossSales!: number;
  private commissionRate!: number;
  private salary!: number;
  constructor(
    FirstName: string,
    LastName: string,
    SocialSecurityNumber: string,
    grossSales: number,
    commissionRate: number,
    salary: number
  ) {
    super(FirstName, LastName, SocialSecurityNumber);
    this.grossSales = grossSales;
    this.commissionRate = commissionRate;
    this.salary = salary;
  }
  earnings(): number {
    return this.salary + this.grossSales * this.commissionRate;
  }

  raise(percent: number): void {
    this.commissionRate += this.commissionRate * percent;
    this.salary += this.salary * percent;
  }
  toString(): string {
    return `Commissioned Employee: ${this.getFirstName()} ${this.getLastName()} with ssn: ${this.getSocialSecurityNumber()}\nGross Sales:${
      this.grossSales
    }\nCommission Rate:${this.commissionRate}\nwith Base Salary of: ${
      this.salary
    }\nEarnings:${this.earnings()}\n`;
  }
}

export { BasePlusCommissionEmployee };