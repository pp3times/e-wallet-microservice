package com.sop.transaction.service;

import com.sop.transaction.dto.TransactionDto;

import java.util.List;

public interface TransactionService {
    List<TransactionDto> getTransaction(Long accountNo);
}
