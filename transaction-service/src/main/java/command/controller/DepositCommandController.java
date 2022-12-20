package command.controller;

import command.DepositCommandBuilder;
import command.model.DepositRestModel;
import org.axonframework.commandhandling.gateway.CommandGateway;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("deposit")
public class DepositCommandController {

    private final CommandGateway commandGateway;

    @Autowired
    public DepositCommandController(CommandGateway commandGateway){
        this.commandGateway=commandGateway;
    }
    @PostMapping
    public String createDepositAction(@RequestBody DepositRestModel model){
        DepositCommandBuilder command = DepositCommandBuilder.builder()
                .transactionId(UUID.randomUUID().toString())
                .accountId(model.getAccountId())
                .walletAddress(model.getWalletAddress())
                .amount(model.getAmount())
                .build();
        String result;
        try {
            result = commandGateway.sendAndWait(command);
        } catch(Exception e){
            result = e.getLocalizedMessage();
        }
        return result;
    }
}
