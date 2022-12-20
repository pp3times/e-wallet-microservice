package command;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class WithdrawCommandBuilder {
    private final String transactionId;
    private final String accountId;
    private final String walletAddress;
    private final double amount;
}
