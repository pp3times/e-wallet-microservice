package service;

import com.google.protobuf.Descriptors;
import com.proto.payment.PaymentServiceGrpc;
import lombok.AllArgsConstructor;
import net.devh.boot.grpc.client.inject.GrpcClient;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@Service
public class PaymentClientService {
//    @GrpcClient("grpc-service")
//    PaymentServiceGrpc.PaymentServiceBlockingStub synchronousClient;
//
//
//    public Map<Descriptors.FieldDescriptor, Object> getPayment(){
//
//    }
}
