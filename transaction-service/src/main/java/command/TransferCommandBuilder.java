package command;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class TransferCommandBuilder {
    private final String transactionId;
    private final String fromAccountId;
    private final String fromWalletAddress;
    private final String toAccountId;
    private final String toWalletAddress;
    private final double amount;
}
