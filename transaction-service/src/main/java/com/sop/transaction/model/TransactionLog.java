package com.sop.transaction.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "transaction_logs")
public class TransactionLog implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "log_id")
    private Long logId;

    @Column(name = "account_no")
    private Long accountNo;

    @Column(name = "amount")
    private double amount;

    @Column(name = "date")
    private String date;

    @Column(name = "transaction_type")
    private String transactionType;

    @Column(name = "wallet_address")
    private String walletAddress;
}
