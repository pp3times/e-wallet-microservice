package command.model;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class DepositRestModel {
    private String accountId;
    private String accountNumber;
    private BigDecimal money;
}
