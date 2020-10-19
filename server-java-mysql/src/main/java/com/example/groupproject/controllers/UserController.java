package com.example.groupproject.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.groupproject.models.User;
import com.example.groupproject.models.UserRepository;


@RestController
@RequestMapping("/users")
public class UserController {

  @Autowired
  private UserRepository userRepository;
  
  @GetMapping()
  public List<User> getUsers() {
    return userRepository.findAll();
  }
  
  @GetMapping("/{email}/{password}")
  public User getUser(@PathVariable String email, @PathVariable String password) {
    User foundUser = userRepository.findByEmail(email);
    
    if (foundUser != null) {
    	if( foundUser.getPassword().matches(password)) {
    		 System.out.println("In getUser controller founduser.getPassword() " + foundUser.getEmail() + " " + foundUser.getPassword());
    		return foundUser;
    	}
    }
    System.out.println("In getUser controller returning null ");
    return null;
  }

  @PostMapping()
  public User addUser(@RequestBody User user) {
	  System.out.println("In addUser controller before save user: ");
	    return userRepository.save(user);
  }
  
  @DeleteMapping("/{id}")
  public void deleteUser(@PathVariable Long id) {
    userRepository.deleteById(id);
  }

  @PutMapping("/{id}")
  public User updateUser(@PathVariable Long id, @RequestBody User user) {
    User foundUser = userRepository.findById(id).orElse(null);
    if (foundUser != null) {
    	foundUser.setEmail(user.getEmail());
    	foundUser.setPassword(user.getPassword());
    	foundUser.setFirstname(user.getFirstname());
    	foundUser.setLastname(user.getLastname());
    
    	userRepository.save(foundUser);
      return foundUser;
    }
    return null;
  }
}

