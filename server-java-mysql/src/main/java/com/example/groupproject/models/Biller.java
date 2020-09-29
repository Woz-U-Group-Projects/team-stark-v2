package com.example.groupproject.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//Configure Spring application to communicate MySQL DB & store 
//user information
//Add 2 new files to src/main/java/com.example.groupproject.models
//		All authentication & authorization code artifacts are in this package
//		Start by creating a Biller class & a BillerRepository interface


@Entity
@Table(name = "biller")
public class Biller {
	
	@Id
	private Long accountnumber;
	
	@Column(nullable = false, unique = true)
	private String billername;
	
	private Date date;
	
	private Long amount;
	
	private String paymentType;

	/**
	 * @return the accountnumber
	 */
	public Long getAccountnumber() {
		return accountnumber;
	}

	/**
	 * @param accountnumber the accountnumber to set
	 */
	public void setAccountnumber(Long accountnumber) {
		this.accountnumber = accountnumber;
	}

	/**
	 * @return the billername
	 */
	public String getBillername() {
		return billername;
	}

	/**
	 * @param billername the billername to set
	 */
	public void setBillername(String billername) {
		this.billername = billername;
	}

	/**
	 * @return the date
	 */
	public Date getDate() {
		return date;
	}

	/**
	 * @param date the date to set
	 */
	public void setDate(Date date) {
		this.date = date;
	}

	/**
	 * @return the amount
	 */
	public Long getAmount() {
		return amount;
	}

	/**
	 * @param amount the amount to set
	 */
	public void setAmount(Long amount) {
		this.amount = amount;
	}

	/**
	 * @return the paymentType
	 */
	public String getPaymentType() {
		return paymentType;
	}

	/**
	 * @param paymentType the paymentType to set
	 */
	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}	
}
