import { Employees } from './Employees';
interface EmployeeOptions {
  FirstName: string;
  LastName: string;
  SocialSecurityNumber: string;
  commissionRate: number;
  grossSales: number;
}
class CommissionEmployee extends Employees {
  private grossSales!: number;
  private commissionRate!: number;
  constructor(params: EmployeeOptions) {
    super(params);
    this.grossSales = params.grossSales;
    this.commissionRate = params.commissionRate;
  }
  earnings(): number {
    return this.grossSales * this.commissionRate;
  }

  raise(percent: number): void {
    this.commissionRate += this.commissionRate * percent;
  }
  toString(): string {
    return `Commissioned Employee: ${this.getFirstName()} ${this.getLastName()} with ssn: ${this.getSocialSecurityNumber()}
Gross Sales:${this.grossSales}
Commission Rate:${this.commissionRate}
Earnings:${this.earnings()}\n`;
  }
}

export { CommissionEmployee };
