package controller;

import com.proto.payment.PaymentRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import service.CreatePaymentService;

@RestController
@RequestMapping
@Slf4j
public class CreatePaymentController {
    @Autowired
    private CreatePaymentService paymentService;

    @PostMapping(path = "/ping", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> ping(@RequestBody PaymentRequest request) {
        return ResponseEntity.ok(paymentService.createPayment(request));
    }
}
