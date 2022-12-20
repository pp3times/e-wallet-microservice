package command.model;

import lombok.Data;

@Data
public class WithdrawRestModel {
    private String accountId;
    private String walletAddress;
    private double amount;
}
