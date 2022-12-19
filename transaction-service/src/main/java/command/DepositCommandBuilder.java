package command;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;

@Builder
@Data
public class DepositCommandBuilder {
    private final String depositId;
    private final String accountId;
    private final String accountNumber;
    private final BigDecimal money;

}
