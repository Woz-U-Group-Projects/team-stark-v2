
package com.example.groupproject.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "biller")
public class Biller {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long billerId;	
	@Column(nullable = false, unique = true)
	private Long accountnumber;	
	private String billername;	
	private Date date;	
	private Long amount;	
	private String paymentType;
	@Column(columnDefinition = "boolean default false")
	private boolean complete;
	
	public Long getAccountnumber() {
		return accountnumber;
	}

	public void setAccountnumber(Long accountnumber) {
		this.accountnumber = accountnumber;
	}

	public String getBillername() {
		return billername;
	}

	public void setBillername(String billername) {
		this.billername = billername;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Long getAmount() {
		return amount;
	}

	public void setAmount(Long amount) {
		this.amount = amount;
	}

	public String getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}
	 public boolean getComplete() {
		    return this.complete;
		  }

	 public void setComplete(boolean complete) {
		    this.complete = complete;
		  }
}