package com.example.groupproject.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//Sheila comment: CrossOrigin annotation blocked out b/c not used
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
//Sheila comment: RequestParam annotation blocked out b/c not used
//import org.springframework.web.bind.annotation.RequestParam;

import com.example.groupproject.models.Account;
import com.example.groupproject.models.AccountRepository;

@RestController

@RequestMapping("/accounts")
public class AccountController {
	@Autowired
	  private AccountRepository accountRepository;

	  @GetMapping()
	  public List<Account> getAccounts() {
	    return accountRepository.findAll();
	  }

	  @PostMapping()
	  public Account addAccount(@RequestBody Account account) {
	    return accountRepository.save(account);
	  }

	  @DeleteMapping("/{id}")
	  public void deleteAccount(@PathVariable Long id) {
	    accountRepository.deleteById(id);
	  }

	  @PutMapping("/{id}")
	  public Account updateProject(@PathVariable Long id, @RequestBody Account account) {
	    Account foundAccount = accountRepository.findById(id).orElse(null);
	    if (foundAccount != null) {
	    	foundAccount.setAccountnumber(account.getAccountnumber());
	    	foundAccount.setAccountname(account.getAccountname());
	    	accountRepository.save(foundAccount);
	      return foundAccount;
	    }
		  return null;
	  }
}
