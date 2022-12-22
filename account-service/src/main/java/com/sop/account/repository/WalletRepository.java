package com.sop.account.repository;

import com.sop.account.model.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WalletRepository extends JpaRepository<Long,Wallet> {
    Wallet findByWalletAddress(String walletAddress);
}
