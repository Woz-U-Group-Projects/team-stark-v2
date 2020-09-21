package com.example.groupproject.models;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.groupproject.models.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
	//Customer findByID (Long id);
}
