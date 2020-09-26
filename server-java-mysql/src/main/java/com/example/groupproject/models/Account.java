package com.example.groupproject.models;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Table(name = "account")
public class Account {
	private Long accountnumber;
	private String accountname;
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
	 * @return the accountname
	 */
	public String getAccountname() {
		return accountname;
	}
	/**
	 * @param accountname the accountname to set
	 */
	public void setAccountname(String accountname) {
		this.accountname = accountname;
	}
}