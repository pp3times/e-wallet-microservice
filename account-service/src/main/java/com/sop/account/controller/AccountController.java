package com.sop.account.controller;


import com.sop.account.dto.AccountDto;
import com.sop.account.dto.AccountRequestDto;
import com.sop.account.dto.WalletDto;
import com.sop.account.service.AccountService;
import com.sop.account.service.WalletService;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@RestController
@RequestMapping("/v1/account")
@Api(tags = {"Account"}, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
public class AccountController {

    @Autowired
    AccountService accountService;
    @Autowired
    WalletService walletService;

    @PostMapping("/create")
    @ApiOperation(value = "Create Account",notes = "Create Account",code = 200)
    @ApiImplicitParam(name = "Authorization", value = "Access Token", required = true, paramType = "header")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success|OK"),
            @ApiResponse(code = 401, message = "Not Authorized!"),
            @ApiResponse(code = 403, message = "Forbidden!"),
            @ApiResponse(code = 404, message = "Not Found!"),
            @ApiResponse(code = 201, message = "Created", response = AccountDto.class) })
    public ResponseEntity<?> createAccount(@RequestBody @Valid AccountRequestDto data){
        return ResponseEntity.ok().body(accountService.createAccount(data));
    }

    @PutMapping("/update")
    @ApiOperation(value = "Update Account",notes = "Update Account",code = 200)
    @ApiImplicitParam(name = "Authorization", value = "Access Token", required = true, paramType = "header")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success|OK"),
            @ApiResponse(code = 401, message = "Not Authorized!"),
            @ApiResponse(code = 403, message = "Forbidden!"),
            @ApiResponse(code = 404, message = "Not Found!"),
            @ApiResponse(code = 201, message = "Created", response = AccountDto.class) })
    public ResponseEntity<?> updateAccount(@RequestBody @Valid AccountRequestDto data){
        return ResponseEntity.ok().body(accountService.updateAccount(data));
    }

    @GetMapping("/wallet/{walletAddress}")
    public WalletDto getWallet(@PathVariable("walletAddress") String walletAddress){
        WalletDto walletDto = walletService.getWallet(walletAddress);
        return walletDto;
    }

}
