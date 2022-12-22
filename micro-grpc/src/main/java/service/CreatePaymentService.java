package service;

import com.proto.payment.PaymentRequest;
import com.proto.payment.PaymentResponse;
import com.stripe.Stripe;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class CreatePaymentService {
    public PaymentResponse createPayment(PaymentRequest request){
        System.out.println("receive request"+request);
        String apiKey = request.getStripeApiKey();
        String paymentMethodId = request.getPaymentMethodId();
        long amount = request.getAmount();
        Stripe.apiKey = apiKey;

        try{
        // Create the payment
        PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
                .setPaymentMethod(paymentMethodId)
                .setAmount(amount)
                .setCurrency("thb")
                .build();
        PaymentIntent paymentIntent = PaymentIntent.create(params);

        return PaymentResponse.newBuilder().setId(paymentIntent.getId()).setStatus("Success").build();
    }
    catch(Exception e){
            e.getMessage();
        }
        return PaymentResponse.newBuilder().setId(paymentMethodId).setStatus("Fail").build();
    }
}
