package com.sop.microgrpc.controller;

import com.proto.payments.PaymentRequest;
import com.sop.microgrpc.service.CreatePaymentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/createPayment")
@Slf4j
public class CreatePaymentController {
    @Autowired
    private CreatePaymentService paymentService;


    @PostMapping
    public ResponseEntity<?> createPayment(@RequestBody PaymentRequest request) {
        return ResponseEntity.ok(paymentService.createPayment(request));
    }
}
