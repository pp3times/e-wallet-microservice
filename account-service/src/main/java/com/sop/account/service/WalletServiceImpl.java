package com.sop.account.service;

import com.sop.account.dto.WalletDto;
import com.sop.account.model.Wallet;
import com.sop.account.repository.WalletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WalletServiceImpl implements WalletService{
    @Autowired
    WalletRepository walletRepository;

    public WalletDto getWallet(String walletAddress){
        Wallet wallet = walletRepository.findByWalletAddress(walletAddress);
        WalletDto walletDto = new WalletDto();
        walletDto.setWalletId(wallet.getWalletId());
        walletDto.setWalletAddress(wallet.getWalletAddress());
        walletDto.setWalletBalance(wallet.getWalletBalance());
        return walletDto;
    }
}
