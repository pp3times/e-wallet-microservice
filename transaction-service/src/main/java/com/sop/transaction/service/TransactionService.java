package com.sop.transaction.service;

import com.sop.transaction.model.TransactionLog;
import com.sop.transaction.query.dto.TransactionDto;

import java.util.List;

public interface TransactionService {
    List<TransactionDto> getTransaction(Long accountNo,String walletAddress);
}
