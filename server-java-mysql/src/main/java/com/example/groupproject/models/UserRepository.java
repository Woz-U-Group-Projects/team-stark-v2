package com.example.groupproject.models;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.groupproject.models.User;

//Configure Spring application to communicate MySQL DB & store user information
//Add 2 new files to src/main/java/com.fullstackproject.auth
//All authentication & authorization code artifacts are in this package
//Start by creating a User class & a UserRepository interface
public interface UserRepository extends JpaRepository<User, Long> {
	User findById(User id);
}

