package com.example.groupproject.models;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.groupproject.models.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {
	Account findbyId(Account id);
}
