package com.sop.transaction.service.kafka;

import com.sop.transaction.constants.AppConstants;
import com.sop.transaction.dto.WalletResponseDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafKaProducerService {
    private static final Logger logger = LoggerFactory.getLogger(KafKaProducerService.class);

    @Autowired
    private KafkaTemplate<String, Object> kafkaTemplate;

    public void sendFundSuccessDetails(WalletResponseDto message) {
        logger.info(String.format("Message sent -> %s", message));
        this.kafkaTemplate.send(AppConstants.FUNDING_TOPIC_NAME, message);
    }

    public void sendWithdrawalSuccessDetails(WalletResponseDto message) {
        logger.info(String.format("Message sent -> %s", message));
        this.kafkaTemplate.send(AppConstants.WITHDRAWAL_TOPIC_NAME, message);
    }

    public void sendTransferSuccessDetails(WalletResponseDto message) {
        logger.info(String.format("Message sent -> %s", message));
        this.kafkaTemplate.send(AppConstants.TRANSFER_TOPIC_NAME, message);
    }
}