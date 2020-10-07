package com.example.groupproject.auth;

import org.springframework.data.jpa.repository.JpaRepository;

//Configure Spring application to communicate MySQL DB & store user information
//Add 2 new files to src/main/java/com.fullstackproject.auth
//All authentication & authorization code artifacts are in this package
//Start by creating a User class & a UserRepository interface
public interface UserRepository extends JpaRepository<User, Long> {
	// User findById(User id);
	User findByUsername(String username);
}

