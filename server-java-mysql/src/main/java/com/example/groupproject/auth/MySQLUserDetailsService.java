package com.example.groupproject.auth;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.groupproject.models.Customer;
@Service
public class MySQLUserDetailsService implements UserDetailsService {
@Autowired
 private CustomerRepository customerRepository;
@Autowired
 private PasswordEncoder passwordEncoder;
@Override
 public UserDetails loadCustomerByEmail(String email) {
   Customer customer = customerRepository.findByemail(email);
   if (customer == null) {
     throw new EmailNotFoundException(email);
   }
   return new org.springframework.security.core.userdetails.User(customer.getEmail(),customer.getPassword(), getAuthorities());
 }
public UserDetails Save(Customer newCustomer) {
   newCustomer.setPassword(passwordEncoder.encode(newCustomer.getPassword()));
   Customer savedUser = customerRepository.save(newCustomer);
   return new org.springframework.security.core.userdetails.User(savedCustomer.getEmail(), savedCustomer.getPassword(), getAuthorities());
 }
private List<SimpleGrantedAuthority> getAuthorities() {
   List<SimpleGrantedAuthority> authList = new ArrayList<>();
   authList.add(new SimpleGrantedAuthority("ROLE_USER"));
   return authList;
 }
}
