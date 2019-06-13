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
public class BasePlusCommissionEmployee extends Employees {
    private double grossSales;
    private double commissionRate;
    private double salary;

    public BasePlusCommissionEmployee(String FirstName, String LastName, String SocialSecurityNumber, double grossSales,
            double commissionRate, double salary) {
        super(FirstName, LastName, SocialSecurityNumber);
        this.commissionRate = commissionRate;
        this.grossSales = grossSales;
        this.salary = salary;
    }

    @Override
    public String toString() {
        return String.format(
                "Base Salary Plus Commissioned Employee: %s %s with ssn: %s\nGross Sales:%.2f\nCommission Rate:%.4f\nwith Base Salary of: %.2f\nEarnings:$%.2f\n",
                getFirstName(), getLastName(), getSocialSecurityNumber(), grossSales, commissionRate, salary,
                earnings());
    }

    @Override
    public double earnings() {
        return this.salary + this.grossSales * this.commissionRate;
    }

    @Override
    public void raise(double percent) {
        this.commissionRate += this.commissionRate * percent;
        this.salary += this.salary * percent;
    }
}