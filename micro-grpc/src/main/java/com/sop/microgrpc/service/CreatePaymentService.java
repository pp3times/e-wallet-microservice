package com.sop.microgrpc.service;

import com.proto.payments.PaymentRequest;
import com.proto.payments.PaymentResponse;
import com.stripe.Stripe;
import com.stripe.model.PaymentIntent;
import com.stripe.net.RequestOptions;
import com.stripe.param.PaymentIntentCreateParams;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
public class CreatePaymentService {
    public PaymentResponse createPayment(PaymentRequest request){
        System.out.println("receive request "+request);
        String api_key = "sk_test_51M3dwME1vH1H0ffZI3E1nLs816wFMbAOiGpVH3nMh5fpYdk9Tnv794Fwy3VhG8lBZBtiptV0OfElr08yy8HPQMPi00AThVbCdv";
        long amount = request.getAmount();
        Stripe.apiKey = api_key;
//    long amount = request.getAmount();
        try{
        // Create the payment

            List<Object> paymentMethodTypes =
                    new ArrayList<>();
            paymentMethodTypes.add("card");
            Map<String, Object> params = new HashMap<>();
            params.put("amount", amount);
            params.put("currency", request.getCurrency());
            params.put("payment_intent", request.getPaymentIntent());
            params.put("payment_intent_client_secret", request.getPaymentIntentClientSecret());
            params.put("redirect_status", request.getRedirectStatus());
            params.put(
                    "payment_method_types",
                    paymentMethodTypes
            );

            PaymentIntent paymentIntent =
                    PaymentIntent.create(params);
            return PaymentResponse.newBuilder().setClientSecret(paymentIntent.getClientSecret()).setStatus("okay").build();
    }
    catch(Exception e){
            e.getMessage();
        }
        return PaymentResponse.newBuilder().setClientSecret("").setStatus("fail").build();
    }
}
