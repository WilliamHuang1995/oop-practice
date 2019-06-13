/*
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/
package app;

/**
 *
 * @author William Huang the handsome
 */
public class CommissionEmployee extends Employees {
    private double grossSales;
    private double commissionRate;

    public CommissionEmployee(String FirstName, String LastName, String SocialSecurityNumber, double grossSales,
            double commissionRate) {
        super(FirstName, LastName, SocialSecurityNumber);
        this.commissionRate = commissionRate;
        this.grossSales = grossSales;
    }

    @Override
    public String toString() {
        return String.format(
                "Commissioned Employee: %s %s with ssn: %s\nGross Sales:%.2f\nCommission Rate:%.4f\nEarnings:$%.2f\n",
                getFirstName(), getLastName(), getSocialSecurityNumber(), grossSales, commissionRate, earnings());
    }

    @Override
    public double earnings() {
        return this.grossSales * this.commissionRate;
    }

    @Override
    public void raise(double percent) {
        this.commissionRate += this.commissionRate * percent;
    }
}