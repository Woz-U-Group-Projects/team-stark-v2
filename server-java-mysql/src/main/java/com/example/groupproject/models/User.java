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
//	  private String username;
	  
	  private String email;
	  
	  private String password;
	  
	  private String lastname;

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
//	public String getUsername() {
//		return this.username;
//	}

	/**
	 * @param username the username to set
	 */
//	public void setUsername(String username) {
//		this.username = username;
//	}

	public String getLastname() {
		return this.lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}