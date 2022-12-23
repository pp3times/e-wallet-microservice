package com.sop.account.query.controller;

import com.sop.account.query.dto.WalletDto;
import com.sop.account.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/v1/wallet")
public class WalletController {
    @Autowired
    WalletService walletService;

    @GetMapping("wallet/{walletId}")
    public WalletDto getWallet(@PathVariable("walletId") Long walletId){
        WalletDto walletDto = walletService.getWallet(walletId);
        return walletDto;
    }


    @GetMapping("/allWallet")
    public List<WalletDto> getAllWallet(){
        return walletService.getAllWallet();
    }

//    @GetMapping("/test")
//    public String getTest(){
//        return "test";
//    }
}
