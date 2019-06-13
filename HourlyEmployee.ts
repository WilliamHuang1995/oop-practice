import { Employees } from "./Employees";
class HourlyEmployee extends Employees {
  private hourlyWage!: number;
  private hoursWorked!: number;
  constructor(
    FirstName: string,
    LastName: string,
    SocialSecurityNumber: string,
    hourlyWage: number,
    hoursWorked: number
  ) {
    super(FirstName, LastName, SocialSecurityNumber);
    this.hourlyWage = hourlyWage;
    if (hoursWorked < 0 || hoursWorked > 168 || hourlyWage < 0) {
      throw new Error("IllegalArgument");
    } else {
      this.hoursWorked = hoursWorked;
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
    return `Commissioned Employee: ${this.getFirstName()} ${this.getLastName()} with ssn: ${this.getSocialSecurityNumber()}\n
    Hourly Wage:${this.hourlyWage}\n
    Hours Worked:${this.hoursWorked}\n
    Earnings:${this.earnings()}\n`;
  }
}

export { HourlyEmployee };
