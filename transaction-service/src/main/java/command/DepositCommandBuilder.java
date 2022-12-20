package command;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class DepositCommandBuilder {
    private final String transactionId;
    private final String accountId;
    private final String walletAddress;
    private final double amount;

}
