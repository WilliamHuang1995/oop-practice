import { Employees } from './Employees';
class SalariedEmployee extends Employees {
  private salary!: number;
  constructor(
    FirstName: string,
    LastName: string,
    SocialSecurityNumber: string,
    salary: number,
  ) {
    super(FirstName, LastName, SocialSecurityNumber);
    if (salary < 0) {
      throw new Error('IllegalArgument');
    } else {
      this.salary = salary;
    }
  }
  earnings(): number {
    return this.salary;
  }

  raise(percent: number): void {
    this.salary += this.salary * percent;
  }
  toString(): string {
    return `Salaried Employee: ${this.getFirstName()} ${this.getLastName()} with ssn: ${this.getSocialSecurityNumber()}\n
    Salary:${this.salary}\n
    Earnings:${this.earnings()}\n`;
  }
}

export { SalariedEmployee };
