package com.sop.account.query.controller;



import com.sop.account.model.Wallet;
import com.sop.account.repository.WalletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping("/v1/account")
public class GetAccountController {
    @Autowired
    private WalletRepository walletRepository;
    @RequestMapping(value = "wallet/{walletId}/{walletAddress}", method = RequestMethod.GET)
    public Optional<Wallet> getWallet(@PathVariable("walletId") Long walletId, @PathVariable("walletAddress") String walletAddress){
        return walletRepository.findByWalletAddress(walletId, walletAddress);
    }

}