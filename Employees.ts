abstract class Employees {
  private FirstName!: string;
  private LastName!: string;
  private SocialSecurityNumber!: string;

  /**
   *
   */
  constructor(
    FirstName: string,
    LastName: string,
    SocialSecurityNumber: string
  ) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.SocialSecurityNumber = SocialSecurityNumber;
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
