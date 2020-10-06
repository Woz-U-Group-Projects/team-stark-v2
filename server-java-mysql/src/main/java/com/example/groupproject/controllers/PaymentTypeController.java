package com.example.groupproject.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin; Cross origin not used
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.bind.annotation.RequestParam; RequestParam not used

import com.example.groupproject.models.PaymentType;
import com.example.groupproject.models.PaymentTypeRepository;

@RestController

@RequestMapping("/payments")
public class PaymentTypeController {
	@Autowired
	  private PaymentTypeRepository paymentTypeRepository;
	  
	  @GetMapping()
	  public List<PaymentType> getPaymentTypes() {
	    return paymentTypeRepository.findAll();
	  }
	  
	  @GetMapping("/{id}")
	  public PaymentType getPaymentTypeById(@PathVariable Long id) {
		  PaymentType foundPaymentType = paymentTypeRepository.findById(id).orElse(null);
		  return foundPaymentType;
	  }

	  @PostMapping()
	  public PaymentType addPaymentType(@RequestBody PaymentType payment_type) {
		    return paymentTypeRepository.save(payment_type);
	  }
	  
	  @DeleteMapping("/{id}")
	  public void deletePaymentType(@PathVariable Long id) {
		  paymentTypeRepository.deleteById(id);
	  }

	  @PutMapping("/{id}")
	  public PaymentType updateProject(@PathVariable Long id, @RequestBody PaymentType payment_type) {
	    PaymentType foundPaymentType = paymentTypeRepository.findById(id).orElse(null);
	    if (foundPaymentType != null) {
	    	foundPaymentType.setPayment_type(payment_type.getPayment_type());
	    	foundPaymentType.setInterestrate(payment_type.getInterestrate());
	    	foundPaymentType.setBillingcycle(payment_type.getBillingcycle());
	    	foundPaymentType.setMinimumpayment(payment_type.getMinimumpayment());
	    	paymentTypeRepository.save(foundPaymentType);
	      return foundPaymentType;
	    }
	    return null;
	  }

}
