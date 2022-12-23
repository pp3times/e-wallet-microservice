package com.example.stripeservice.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;

public class PaymentResponse {
    private String clientSecret;

    public PaymentResponse(String clientSecret){
        this.clientSecret = clientSecret;
    }

    public String getClientSecret() {

        return clientSecret;
    }

    public void setClientSecret(String clientSecret) {

        this.clientSecret = clientSecret;
    }
}
