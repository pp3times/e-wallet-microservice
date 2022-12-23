package com.sop.account.query.controller;

import com.sop.account.query.dto.AccountDto;
import com.sop.account.query.dto.WalletDto;
import com.sop.account.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/account")
public class AccountQueryController {
    @Autowired
    AccountService accountService;

    @GetMapping("info/{accountId}")
    public AccountDto getAccount(@PathVariable("accountId") Long accountId){
        AccountDto accountDto = accountService.getAccount(accountId);
        return accountDto;
    }

}
