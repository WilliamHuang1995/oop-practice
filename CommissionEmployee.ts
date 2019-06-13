import { Employees } from "./Employees";
class CommissionEmployee extends Employees {
  private grossSales!: number;
  private commissionRate!: number;
  constructor(
    FirstName: string,
    LastName: string,
    SocialSecurityNumber: string,
    grossSales: number,
    commissionRate: number
  ) {
    super(FirstName, LastName, SocialSecurityNumber);
    this.grossSales = grossSales;
    this.commissionRate = commissionRate;
  }
  earnings(): number {
    return this.grossSales * this.commissionRate;
  }

  raise(percent: number): void {
    this.commissionRate += this.commissionRate * percent;
  }
  toString(): string {
    return `Commissioned Employee: ${this.getFirstName()} ${this.getLastName()} with ssn: ${this.getSocialSecurityNumber()}\nGross Sales:${
      this.grossSales
    }\nCommission Rate:${this.commissionRate}\nEarnings:${this.earnings()}\n`;
  }
}

export { CommissionEmployee };
