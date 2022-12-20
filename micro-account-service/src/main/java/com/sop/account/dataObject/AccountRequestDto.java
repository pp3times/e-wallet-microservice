package com.sop.account.dataObject;

import lombok.Data;

import javax.validation.constraints.NotNull;
import java.io.Serializable;


@Data
public class AccountRequestDto implements Serializable {
    private Long accountId;

    @NotNull(message = "Surname is required")
    private String surname;

    @NotNull(message = "First Name is required")
    private String firstName;

    @NotNull(message = "Last Name is required")
    private String lastName;

    @NotNull(message = "email is required")
    private String email;

    @NotNull(message = "phone is required")
    private String phone;

    private String accountNo;
}
