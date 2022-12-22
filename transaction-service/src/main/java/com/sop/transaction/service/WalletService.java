package com.sop.transaction.service;

import com.sop.transaction.model.Wallet;
import com.sop.transaction.dto.ApiResponseDto;

import java.util.Optional;

public interface WalletService {
    ApiResponseDto fundWallet(double amount, String walletAddress);
    ApiResponseDto withdrawFromWallet(double amount, String walletAddress);
    ApiResponseDto transferToWallet(double amount, String sourceWalletAddress, String destinationWalletAddress);
    Optional<Wallet> findByWalletAddress(String walletAddress);
}
