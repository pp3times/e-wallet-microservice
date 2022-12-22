package controller;

import com.proto.payment.PaymentRequest;
import com.proto.payment.PaymentResponse;
import com.proto.payment.PaymentServiceGrpc;
import io.grpc.stub.StreamObserver;
import lombok.extern.slf4j.Slf4j;
import net.devh.boot.grpc.server.service.GrpcService;
import org.springframework.beans.factory.annotation.Autowired;
import service.CreatePaymentService;

@Slf4j
@GrpcService
public class GrpcController extends PaymentServiceGrpc.PaymentServiceImplBase {
    @Autowired
    private CreatePaymentService paymentService;

    @Override
    public void createPayment(PaymentRequest request, StreamObserver<PaymentResponse> responseStreamObserver){
        responseStreamObserver.onNext(paymentService.createPayment(request));
        responseStreamObserver.onCompleted();
    }
}
