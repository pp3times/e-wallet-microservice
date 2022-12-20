package command.model;

import lombok.Data;


@Data
public class DepositRestModel {
    private String accountId;
    private String walletAddress;
    private double amount;
}
