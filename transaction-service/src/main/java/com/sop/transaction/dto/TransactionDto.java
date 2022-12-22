package com.sop.transaction.dto;

import lombok.Data;

import javax.persistence.Column;
import java.io.Serializable;

@Data
public class TransactionDto implements Serializable {
    private Long logId;

    private Long accountNo;

    private double amount;

    private String date;

    private String transactionType;

    private String walletAddress;
}
