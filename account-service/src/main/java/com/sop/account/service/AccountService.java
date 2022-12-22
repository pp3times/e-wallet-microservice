package com.sop.account.service;

import com.sop.account.dto.AccountRequestDto;
import com.sop.account.dto.ApiResponseDto;

public interface AccountService {
    ApiResponseDto createAccount(AccountRequestDto dto);
    ApiResponseDto updateAccount(AccountRequestDto dto);
}
