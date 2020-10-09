
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

  @PostMapping()
  public User addUser(@RequestBody User user) {
	    return userRepository.save(user);
  }
  
  @DeleteMapping("/email")
  public void deleteEmail(@PathVariable String email) {
    userRepository.deleteByEmail(email);
  }

  @PutMapping("/email")
  public User updateProject(@PathVariable String email, @RequestBody User user) {
    User foundUser = userRepository.findByEmail(email).orElse(null);
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
