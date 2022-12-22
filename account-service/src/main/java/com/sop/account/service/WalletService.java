package com.sop.account.service;

import com.sop.account.dto.WalletDto;

public interface WalletService {
    WalletDto getWallet(String walletAddress);

}
