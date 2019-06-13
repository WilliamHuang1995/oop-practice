
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
public class HourlyEmployee extends Employees {
    private double hourlyWage;
    private double hoursWorked;

    public HourlyEmployee(String FirstName, String LastName, String SocialSecurityNumber, double hourlyWage,
            double hoursWorked) {
        super(FirstName, LastName, SocialSecurityNumber);
        this.hourlyWage = hourlyWage;

        if (hoursWorked < 0 || hoursWorked > 168 || hourlyWage < 0) {
            throw new IllegalArgumentException("");
        } else {
            this.hoursWorked = hoursWorked;
        }

    }

    @Override
    public String toString() {
        return String.format(
                "Hourly Employee: %s %s with ssn: %s\nHourly Wage:%.2f\nHours Worked:%.2f\nEarnings:$%.2f\n",
                getFirstName(), getLastName(), getSocialSecurityNumber(), hourlyWage, hoursWorked, earnings());
    }

    @Override
    public double earnings() {
        if (hoursWorked > 40) {
            return hourlyWage * 40 + hourlyWage * (hoursWorked - 40) * 1.5;
        } else
            return hourlyWage * hoursWorked;
    }

    @Override
    public void raise(double percent) {
        this.hourlyWage += this.hourlyWage * percent;
    }
}