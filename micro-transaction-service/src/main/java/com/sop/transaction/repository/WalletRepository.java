package com.sop.transaction.repository;

import com.sop.transaction.model.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface WalletRepository extends JpaRepository<Wallet, Long> {
    Optional<Wallet> findByWalletAddress(String walletAddress);

}
