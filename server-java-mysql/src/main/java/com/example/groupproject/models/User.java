package com.example.groupproject.models;

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
//		Start by creating a User class & a UserRepository interface
@Entity
@Table(name = "user")
public class User {
	@Id
	  @GeneratedValue(strategy = GenerationType.AUTO)
	  private Long id;
	
	@Column(nullable = false, unique = true)
	  private String email;
	
	@Column(nullable = false, unique = false)
	  private String firstname;
	  private String lastname;
	  private String password;
	  private String username;
	 
	/**
	 * @return the id
	 */
	public Long getId() {
		return this.id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * @return the username
	 */
	public String getUsername() {
		return this.username;
	}

	/**
	 * @param username the username to set
	 */
	public void setUsername(String username) {
		this.username = username;
	}

	/**
	 * @return the firstName
	 */
	public String getFirstName() {
		return firstname;
	}

	/**
	 * @param firstName the firstName to set
	 */
	public void setFirstName(String firstname) {
		this.firstname = firstname;
	}

	/**
	 * @return the lastName
	 */
	public String getLastName() {
		return lastname;
	}

	/**
	 * @param lastName the lastName to set
	 */
	public void setLastName(String lastname) {
		this.lastname = lastname;
	}

	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
		setUsername(email);
	}
}