interface EmployeeOptions {
  FirstName: string;
  LastName: string;
  SocialSecurityNumber: string;
}
abstract class Employees {
  private FirstName!: string;
  private LastName!: string;
  private SocialSecurityNumber!: string;

  /**
   *
   */
  constructor(params: EmployeeOptions) {
    this.FirstName = params.FirstName;
    this.LastName = params.LastName;
    this.SocialSecurityNumber = params.SocialSecurityNumber;
  }

  getFirstName(): string {
    return this.FirstName;
  }
  getLastName(): string {
    return this.LastName;
  }
  getSocialSecurityNumber(): string {
    return this.SocialSecurityNumber;
  }
}

export { Employees };
