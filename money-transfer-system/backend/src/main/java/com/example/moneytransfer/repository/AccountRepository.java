package com.example.moneytransfer.repository;

import com.example.moneytransfer.domain.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {
}

