package com.example.groupproject.models;

import java.time.*;
import java.time.chrono.ChronoLocalDate;
import java.util.*;
import java.time.temporal.TemporalUnit;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private Long accountnumber;
	
	@Column(columnDefinition = "boolean default false")
	private boolean scheduled;
	@Column(columnDefinition = "boolean default false")
	private boolean paymentCancel;
	
	@Column(nullable = false, unique = true)
	private String billername;
	
	private Date date;
	
	private Long amount;
	
	private String paymentType;
	
	private Long paymentAmount;

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
		if(date.equals(date)) {
			setScheduled(true);
		}
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

	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the scheduled
	 */
	public boolean isScheduled() {
		return scheduled;
	}

	/**
	 * @param scheduled the scheduled to set
	 */
	public void setScheduled(boolean scheduled) {
		this.scheduled = scheduled;
	}

	/**
	 * @return the paymentAmount
	 */
	public Long getPaymentAmount() {
		return paymentAmount;
	}

	/**
	 * @param paymentAmount the paymentAmount to set
	 */
	public void setPaymentAmount(Long paymentAmount) {
		this.paymentAmount = paymentAmount;
	}	
	
	public void isPaymentCancelDatePast (){
//		String zoneId = "America/Pittsburgh";
//		TimeZone tz = TimeZone.getTimeZone(zoneId);
//		ChronoLocalDate today = LocalDate.now();
//		int hours = 72;
		//TemporalUnit;
		
		//Is today more than 72 hours before payment schedule date?
		//today = today.plus(TemporalUnit(hours)) ;  // .plusWeeks( 2 )
//		if(today.isBefore(getDate()) {
//			setPaymentCancel(false);
//		}else {
//			setPaymentCancel(true);
//		}
	}

	/**
	 * @return the paymentCancel
	 */
	public boolean isPaymentCancel() {
		return paymentCancel;
	}

	/**
	 * @param paymentCancel the paymentCancel to set
	 */
	public void setPaymentCancel(boolean paymentCancel) {
		this.paymentCancel = paymentCancel;
	}
}
