package com.example.groupproject.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.groupproject.models.Biller;
import com.example.groupproject.models.BillerRepository;

@RestController
@RequestMapping("/billers")
public class BillerController {
  @Autowired
  private BillerRepository billerRepository;
  
  @GetMapping()
  public List<Biller> getBillers() {
    return billerRepository.findAll();
  }
  
  @GetMapping("/{id}")
  public Biller getBillerById(@PathVariable Long id) {
	  Biller foundBiller = billerRepository.findById(id).orElse(null);
	  return foundBiller;
  }

  @PostMapping()
  public Biller addBiller(@RequestBody Biller biller) {
	    return billerRepository.save(biller);
  }
  
  @DeleteMapping("/{id}")
  public void deleteBiller(@PathVariable Long id) {
    billerRepository.deleteById(id);
  }

  @PutMapping("/{id}")
  public Biller updateProject(@PathVariable Long id, @RequestBody Biller biller) {
    Biller foundBiller = billerRepository.findById(id).orElse(null);
    if (foundBiller != null) {
    	foundBiller.setAccountnumber(biller.getAccountnumber());
    	foundBiller.setBillername(biller.getBillername());
    	foundBiller.setAmount(biller.getAmount());
    	foundBiller.setDate(biller.getDate());
    	foundBiller.setPaymentType(biller.getPaymentType());
    	billerRepository.save(foundBiller);
      return foundBiller;
    }
    return null;
  }
}
