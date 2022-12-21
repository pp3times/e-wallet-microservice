package server;

import com.proto.payment.CreatePaymentRequest;
import com.proto.payment.CreatePaymentResponse;
import com.proto.payment.PaymentServiceGrpc;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import io.grpc.stub.StreamObserver;
import net.devh.boot.grpc.server.service.GrpcService;

@GrpcService
public class PaymentGrpcImpl extends PaymentServiceGrpc.PaymentServiceImplBase{
    @Override
    public void createPayment(CreatePaymentRequest request, StreamObserver<CreatePaymentResponse> responseObserver) {
        String apiKey = request.getStripeApiKey();
        String paymentMethodId = request.getPaymentMethodId();
        long amount = request.getAmount();

        try {
            // Set up the Stripe API client
            Stripe.apiKey = apiKey;

            // Create the payment
            PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
                    .setPaymentMethod(paymentMethodId)
                    .setAmount(amount)
                    .setCurrency("thb")
                    .build();
            PaymentIntent paymentIntent = PaymentIntent.create(params);

            // Create the response
            CreatePaymentResponse response = CreatePaymentResponse.newBuilder()
                    .setId(paymentIntent.getId())
                    .setStatus(paymentIntent.getStatus())
                    .build();
            responseObserver.onNext(response);
            responseObserver.onCompleted();
        } catch (StripeException e) {
            responseObserver.onError(e);
        }
    }}
