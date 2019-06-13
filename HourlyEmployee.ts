import { Employees } from './Employees';
interface EmployeeOptions {
  FirstName: string;
  LastName: string;
  SocialSecurityNumber: string;
  hoursWorked: number;
  hourlyWage: number;
}
class HourlyEmployee extends Employees {
  private hourlyWage!: number;
  private hoursWorked!: number;
  constructor(params: EmployeeOptions) {
    super(params);
    this.hourlyWage = params.hourlyWage;
    if (
      params.hoursWorked < 0 ||
      params.hoursWorked > 168 ||
      params.hourlyWage < 0
    ) {
      throw new Error('IllegalArgument');
    } else {
      this.hoursWorked = params.hoursWorked;
    }
  }
  earnings(): number {
    if (this.hoursWorked > 40) {
      return (
        this.hourlyWage * 40 + this.hourlyWage * (this.hoursWorked - 40) * 1.5
      );
    } else return this.hourlyWage * this.hoursWorked;
  }

  raise(percent: number): void {
    this.hourlyWage += this.hourlyWage * percent;
  }
  toString(): string {
    return `Hourly Employee: ${this.getFirstName()} ${this.getLastName()} with ssn: ${this.getSocialSecurityNumber()}
Hourly Wage:${this.hourlyWage}
Hours Worked:${this.hoursWorked}
Earnings:${this.earnings()}\n`;
  }
}

export { HourlyEmployee };
