package com.sop.transaction.service;

import com.sop.transaction.query.dto.TransactionDto;
import com.sop.transaction.model.TransactionLog;
import com.sop.transaction.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TransactionServiceImpl implements TransactionService {
    @Autowired
    TransactionRepository transactionRepository;

    public List<TransactionDto> getTransaction(Long accountNo){
        List<TransactionLog> transactionLogs = transactionRepository.findByAccountNo(accountNo);
        return transactionLogs.stream().map(transactionLog -> mapTransactionLogToTransactionDto(transactionLog)).collect(Collectors.toList());
    }
    private TransactionDto mapTransactionLogToTransactionDto(TransactionLog t){
        TransactionDto transactionDto = new TransactionDto();
        transactionDto.setLogId(t.getLogId());
        transactionDto.setAccountNo(t.getAccountNo());
        transactionDto.setAmount(t.getAmount());
        transactionDto.setDate(t.getDate());
        transactionDto.setTransactionType(t.getTransactionType());
        transactionDto.setWalletAddress(t.getWalletAddress());
        return transactionDto;
    }
}
