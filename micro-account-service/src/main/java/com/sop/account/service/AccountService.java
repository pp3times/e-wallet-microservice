package com.sop.account.service;

import com.sop.account.dataObject.AccountRequestDto;
import com.sop.account.dataObject.ApiResponseDto;

public interface AccountService {
    ApiResponseDto createAccount(AccountRequestDto dto);
    ApiResponseDto updateAccount(AccountRequestDto dto);
}
