package com.sop.account.query.controller;

import com.sop.account.query.dto.WalletDto;
import com.sop.account.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/wallet")
public class WalletController {
    @Autowired
    WalletService walletService;

    @GetMapping("wallet/{walletAddress}")
    public WalletDto getWallet(@PathVariable("walletAddress") String walletAddress){
        WalletDto walletDto = walletService.getWallet(walletAddress);
        return walletDto;
    }

//    @GetMapping("/test")
//    public String getTest(){
//        return "test";
//    }
}
