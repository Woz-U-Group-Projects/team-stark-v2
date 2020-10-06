package com.example.groupproject.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "payment_type")
public class PaymentType {
	 @Id
	  @GeneratedValue(strategy = GenerationType.AUTO)
	private long 	id;
	private String  payment_type;
	private float	interestrate;
	private int		billingcycle;
	private float 	minimumpayment;
	/**
	 * @return the id
	 */
	public long getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(long id) {
		this.id = id;
	}
	/**
	 * @return the payment_type
	 */
	public String getPayment_type() {
		return payment_type;
	}
	/**
	 * @param payment_type the payment_type to set
	 */
	public void setPayment_type(String payment_type) {
		this.payment_type = payment_type;
	}
	/**
	 * @return the interestrate
	 */
	public float getInterestrate() {
		return interestrate;
	}
	/**
	 * @param interestrate the interestrate to set
	 */
	public void setInterestrate(float interestrate) {
		this.interestrate = interestrate;
	}
	/**
	 * @return the billingcycle
	 */
	public int getBillingcycle() {
		return billingcycle;
	}
	/**
	 * @param billingcycle the billingcycle to set
	 */
	public void setBillingcycle(int billingcycle) {
		this.billingcycle = billingcycle;
	}
	/**
	 * @return the minimumpayment
	 */
	public float getMinimumpayment() {
		return minimumpayment;
	}
	/**
	 * @param minimumpayment the minimumpayment to set
	 */
	public void setMinimumpayment(float minimumpayment) {
		this.minimumpayment = minimumpayment;
	}
}
