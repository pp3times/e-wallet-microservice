package com.sop.account.service;

import com.sop.account.query.dto.AccountDto;
import com.sop.account.dto.AccountRequestDto;
import com.sop.account.dto.ApiResponseDto;

public interface AccountService {
    ApiResponseDto createAccount(AccountRequestDto dto);
    ApiResponseDto updateAccount(AccountRequestDto dto);

    AccountDto getAccount(Long accountId);
}
