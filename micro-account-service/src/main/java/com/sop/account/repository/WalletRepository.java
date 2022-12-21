package com.sop.account.repository;

import com.sop.account.model.Account;
import com.sop.account.model.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface WalletRepository extends JpaRepository<Wallet, Long> {
    @Query("SELECT c from Wallet c where c.walletId=?1 OR c.walletAddress=?2")
    Optional<Wallet> findByWalletAddress(Long walletId, String walletAddress);
}
