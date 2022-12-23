package com.sop.transaction.query.controller;


import com.sop.transaction.query.dto.TransactionDto;
import com.sop.transaction.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/v1/transaction")
public class TransactionLogController {
    @Autowired
    TransactionService transactionService;

    @GetMapping("/log/{accountId}/{walletAddress}")
    public List<TransactionDto> getTransactionLog(@PathVariable("accountId") Long accountNo, @PathVariable("walletAddress") String walletAddress){
        List<TransactionDto> transactionDtoList = transactionService.getTransaction(accountNo, walletAddress);
        return transactionDtoList;
    }
}
