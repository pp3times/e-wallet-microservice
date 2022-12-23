package com.sop.microgrpc.controller;

import com.proto.payments.PaymentRequest;
import com.proto.payments.PaymentResponse;
import com.proto.payments.PaymentServiceGrpc;
import com.sop.microgrpc.service.CreatePaymentService;
import io.grpc.stub.StreamObserver;
import lombok.extern.slf4j.Slf4j;
import net.devh.boot.grpc.server.service.GrpcService;
import org.springframework.beans.factory.annotation.Autowired;


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
