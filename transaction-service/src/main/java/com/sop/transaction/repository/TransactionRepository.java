package com.sop.transaction.repository;

import com.sop.transaction.model.TransactionLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TransactionRepository extends JpaRepository<TransactionLog, Long> {
    List<TransactionLog> findByAccountNoAndWalletAddress(Long accountNo, String walletAddress);
}
