package com.sop.notification.repository;

import com.sop.notification.model.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface WalletRepository extends JpaRepository<Wallet, Long> {
    Optional<Wallet> findByWalletAddress(String walletAddress);
    Optional<List<Wallet>> findAllByWalletAddress(String walletAddress);

    Optional<List<Wallet>> findByDateCreatedBetween(LocalDateTime dateFrom, LocalDateTime dateTo);
}
