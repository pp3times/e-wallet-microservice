package core;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

import java.io.Serializable;
import java.math.BigDecimal;

@Entity
@Data
@Table(name="transactions")
public class TransactionEntity implements Serializable{

    @Id
    @Column
    private String accountId;
    private String accountNumber;
    private BigDecimal balance;
    private enum transactionType {deposit, withdraw, topUp};
}
