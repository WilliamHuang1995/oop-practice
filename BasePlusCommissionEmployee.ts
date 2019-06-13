import { Employees } from './Employees';
interface EmployeeOptions {
  FirstName: string;
  LastName: string;
  SocialSecurityNumber: string;
  grossSales: number;
  commissionRate: number;
  salary: number;
}
class BasePlusCommissionEmployee extends Employees {
  private grossSales!: number;
  private commissionRate!: number;
  private salary!: number;
  constructor(params: EmployeeOptions) {
    super(params);
    this.grossSales = params.grossSales;
    this.commissionRate = params.commissionRate;
    this.salary = params.salary;
  }
  earnings(): number {
    return this.salary + this.grossSales * this.commissionRate;
  }

  raise(percent: number): void {
    this.commissionRate += this.commissionRate * percent;
    this.salary += this.salary * percent;
  }
  toString(): string {
    return `Base Plus Commissioned Employee: ${this.getFirstName()} ${this.getLastName()} with ssn: ${this.getSocialSecurityNumber()}
Gross Sales:${this.grossSales}
Commission Rate:${this.commissionRate}
with Base Salary of: ${this.salary}
Earnings:${this.earnings()}\n`;
  }
}

export { BasePlusCommissionEmployee };
