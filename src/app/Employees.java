/*
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/
package app;

/**
 *
 * @author William
 */
public abstract class Employees {
    private final String FirstName;
    private final String LastName;
    private final String SocialSecurityNumber;

    public Employees(String FirstName, String LastName, String SocialSecurityNumber) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.SocialSecurityNumber = SocialSecurityNumber;
    }

    public String getFirstName() {
        return FirstName;
    }

    public String getLastName() {
        return LastName;
    }

    public String getSocialSecurityNumber() {
        return SocialSecurityNumber;
    }

    abstract public double earnings();

    abstract public void raise(double percent);
}
