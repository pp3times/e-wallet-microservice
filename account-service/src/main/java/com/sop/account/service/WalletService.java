package com.sop.account.service;

import com.sop.account.query.dto.WalletDto;

public interface WalletService {
    WalletDto getWallet(Long walletId);

}
