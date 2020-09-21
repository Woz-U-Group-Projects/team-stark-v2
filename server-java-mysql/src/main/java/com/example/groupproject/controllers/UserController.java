package com.example.groupproject.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.groupproject.models.Task;
import com.example.groupproject.models.User;
import com.example.groupproject.models.UserRepository;


@RestController
@RequestMapping("/api/user")
public class UserController {

  @Autowired
  private UserRepository userRepository;
//  private MySQLUserDetailsService userService;

  @PostMapping("/register")
  public User addUser(@RequestBody User user) {
	    return userRepository.save(user);
  }
  
  public void register(@RequestBody User newUser) {
//    userService.Save(newUser);
  }
  
  @DeleteMapping("/{id}")
  public void deleteUser(@PathVariable Long id) {
    userRepository.deleteById(id);
  }

  @PutMapping("/{id}")
  public User updateUser(@PathVariable Long id, @RequestBody User user) {
    User foundUser = userRepository.findById(id).orElse(null);
    if (foundUser != null) {
    	foundUser.setUsername(user.getUsername());
    	//foundUser.setComplete(user.getComplete());
    	userRepository.save(foundUser);
      return foundUser;
    }
    return null;
  }
}

