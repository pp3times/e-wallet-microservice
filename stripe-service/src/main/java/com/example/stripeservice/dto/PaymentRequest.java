package com.example.stripeservice.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;

public class PaymentRequest {
    @NotNull
    private Integer amount;


    @NotNull
    private String currency;


    public PaymentRequest(Integer amount, String currency) {
        this.amount = amount;
        this.currency = currency;
    }

    public PaymentRequest() {

    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }


    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }


    @Override
    public String toString() {
        return "CreatePayment{" +
                "amount=" + amount +
                ", currency='" + currency + '\'' +
                '}';
    }
}
