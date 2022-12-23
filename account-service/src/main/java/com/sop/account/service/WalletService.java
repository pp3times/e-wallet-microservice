package com.sop.account.service;

import com.sop.account.query.dto.WalletDto;

import java.util.List;

public interface WalletService {
    WalletDto getWallet(Long walletId);

    List<WalletDto> getAllWallet();

}
