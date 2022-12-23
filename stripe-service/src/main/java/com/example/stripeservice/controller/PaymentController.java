package com.example.stripeservice.controller;

import com.example.stripeservice.dto.PaymentRequest;
import com.example.stripeservice.dto.PaymentResponse;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
public class PaymentController {

    @PostMapping("/creatPayment")
    public PaymentResponse createPaymentIntent (@RequestBody @Valid PaymentRequest request) throws  StripeException {

        PaymentIntentCreateParams createParams = new PaymentIntentCreateParams.Builder()
                .addPaymentMethodType("card")
                .setCurrency(request.getCurrency())
                .setAmount(request.getAmount()*100L)      // createPayment ... what user want to buy
                .build();

        // Create a PaymentIntent with the order amount and currency
        PaymentIntent intent = PaymentIntent.create(createParams);
        return new PaymentResponse(intent.getClientSecret());
    }
}
