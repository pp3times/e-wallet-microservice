package com.sop.notification.service;

import com.sop.notification.dto.ApiResponseDto;
import com.sop.notification.model.TransactionLogs;

import java.time.LocalDateTime;

public interface TransactionLogsService {
  ApiResponseDto saveTransactionLogs(TransactionLogs data);
  ApiResponseDto getTransactionLogsByWalletAddress(String walletAddress);
  ApiResponseDto getTransactionLogsByDateRange(LocalDateTime dateFrom, LocalDateTime dateTo);
}
