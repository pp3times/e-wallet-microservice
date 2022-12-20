package command.model;

import lombok.Data;


@Data
public class TransferRestModel {
    private String fromAccountId;
    private String fromWalletAddress;
    private String toAccountId;
    private String toWalletAddress;
    private double amount;
}
