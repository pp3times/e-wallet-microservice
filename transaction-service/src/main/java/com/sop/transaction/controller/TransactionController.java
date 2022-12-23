package com.sop.transaction.controller;


//import com.sop.transaction.dto.*;
import com.sop.transaction.query.dto.TransactionDto;
import com.sop.transaction.service.TransactionService;
import com.sop.transaction.service.WalletService;
import com.sop.transaction.dto.*;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/v1/wallet")
//@Api(tags = {"Account"},description = "  ",produces = MediaType.APPLICATION_JSON_VALUE,consumes = MediaType.APPLICATION_JSON_VALUE)
public class TransactionController {

    @Autowired
    WalletService walletService;

//    @Autowired
//    TransactionService transactionService;
    @PostMapping("/fund")
    @ApiOperation(value = "Fund Wallet",notes = "Add funds to wallet account")
    @ApiImplicitParam(name = "Authorization", value = "Access Token", required = true, paramType = "header")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success|OK"),
            @ApiResponse(code = 401, message = "Not Authorized!"),
            @ApiResponse(code = 403, message = "Forbidden!"),
            @ApiResponse(code = 404, message = "Not Found!"),
            @ApiResponse(code = 201, message = "Created", response = WalletDto.class) })
    public ResponseEntity<ApiResponseDto> fundWallet(@Valid @RequestBody FundWalletRequestDto data) {
        return ResponseEntity.ok().body(walletService.fundWallet(data.getAmount(), data.getWalletAddress()));
    }

    @PostMapping("/withdraw")
    @ApiOperation(value = "Withdraw Funds",notes = "Withdraw funds from wallet account")
    @ApiImplicitParam(name = "Authorization", value = "Access Token", required = true, paramType = "header")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success|OK"),
            @ApiResponse(code = 401, message = "Not Authorized!"),
            @ApiResponse(code = 403, message = "Forbidden!"),
            @ApiResponse(code = 404, message = "Not Found!"),
            @ApiResponse(code = 201, message = "Created", response = WalletDto.class) })
    public ResponseEntity<ApiResponseDto> withdrawFromWallet(@Valid @RequestBody WithdrawWalletRequestDto data){
        return ResponseEntity.ok().body(walletService.withdrawFromWallet(data.getAmount(), data.getWalletAddress()));
    }

    @PostMapping("/transfer")
    @ApiOperation(value = "Withdraw Funds",notes = "Withdraw funds from wallet account")
    @ApiImplicitParam(name = "Authorization", value = "Access Token", required = true, paramType = "header")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success|OK"),
            @ApiResponse(code = 401, message = "Not Authorized!"),
            @ApiResponse(code = 403, message = "Forbidden!"),
            @ApiResponse(code = 404, message = "Not Found!"),
            @ApiResponse(code = 201, message = "Created", response = WalletDto.class) })
    public ResponseEntity<ApiResponseDto> transferFromWalletToWallet(@Valid @RequestBody WalletTransferRequestDto data){
        return ResponseEntity.ok().body(walletService.transferToWallet(data.getAmount(), data.getSourceWalletAddress(), data.getDestinationWalletAddress()));
    }

//    @GetMapping("/transactions/{accountId}")
//    public List<TransactionDto> getTransactionLog(@PathVariable("accountId") Long accountNo){
//        List<TransactionDto> transactionDtoList = transactionService.getTransaction(accountNo);
//        return transactionDtoList;
//    }

//    @GetMapping("/test")
//    public String test(){
//        return "test";
//    }

}
