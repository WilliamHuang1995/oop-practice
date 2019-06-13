/*
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/
package app;

/**
 *
 * @author user
 */
public class SalariedEmployee extends Employees {
    private double salary;

    public SalariedEmployee(String FirstName, String LastName, String SocialSecurityNumber, double salary) {
        super(FirstName, LastName, SocialSecurityNumber);
        if (salary < 0) {
            throw new IllegalArgumentException("");
        } else {
            this.salary = salary;
        }
    }

    @Override
    public String toString() {
        return String.format("Salaried Employee: %s %s with ssn: %s\nSalary:%.2f\nEarning:%.2f\n", getFirstName(),
                getLastName(), getSocialSecurityNumber(), salary, earnings());
    }

    @Override
    public double earnings() {
        return salary;
    }

    @Override
    public void raise(double percent) {
        this.salary += this.salary * percent;
    }
}