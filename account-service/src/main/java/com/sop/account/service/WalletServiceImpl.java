package com.sop.account.service;

import com.sop.account.query.dto.WalletDto;
import com.sop.account.model.Wallet;
import com.sop.account.repository.WalletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class WalletServiceImpl implements WalletService{
    @Autowired
    WalletRepository walletRepository;

    @Override
    public WalletDto getWallet(Long walletId){
        Wallet wallet = walletRepository.findByWalletId(walletId);
        WalletDto walletDto = new WalletDto();
        walletDto.setWalletId(wallet.getWalletId());
        walletDto.setWalletAddress(wallet.getWalletAddress());
        walletDto.setWalletBalance(wallet.getWalletBalance());
        return walletDto;
    }

    @Override
    public List<WalletDto> getAllWallet(){
        List<Wallet> wallets = walletRepository.findAll();
        return wallets.stream().map(wallet -> mapWalletToWalletDto(wallet)).collect(Collectors.toList());
    }
    private WalletDto mapWalletToWalletDto(Wallet t){
        WalletDto walletDto = new WalletDto();
        walletDto.setWalletId(t.getWalletId());
        walletDto.setWalletAddress(t.getWalletAddress());
        walletDto.setWalletBalance(t.getWalletBalance());
        return walletDto;
    }
}
