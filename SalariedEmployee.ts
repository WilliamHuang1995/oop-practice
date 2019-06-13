import { Employees } from './Employees';
interface EmployeeOptions {
  FirstName: string;
  LastName: string;
  SocialSecurityNumber: string;
  salary: number;
}
class SalariedEmployee extends Employees {
  private salary!: number;
  constructor(params: EmployeeOptions) {
    super(params);
    if (params.salary < 0) {
      throw new Error('IllegalArgument');
    } else {
      this.salary = params.salary;
    }
  }
  earnings(): number {
    return this.salary;
  }

  raise(percent: number): void {
    this.salary += this.salary * percent;
  }
  toString(): string {
    return `Salaried Employee: ${this.getFirstName()} ${this.getLastName()} with ssn: ${this.getSocialSecurityNumber()}
Salary:${this.salary}
Earnings:${this.earnings()}\n`;
  }
}

export { SalariedEmployee };
