package com.sop.account.service.kafka;

import com.sop.account.constants.AppConstants;
import com.sop.account.dto.WalletResponseDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate; 
import org.springframework.stereotype.Service;

@Service
public class KafKaProducerService 
{
    private static final Logger logger = LoggerFactory.getLogger(KafKaProducerService.class);
     
    @Autowired
    private KafkaTemplate<String, Object> kafkaTemplate;
 
    public void sendMessage(WalletResponseDto message) {
        logger.info(String.format("Message sent -> %s", message));
        this.kafkaTemplate.send(AppConstants.TOPIC_NAME, message);
    }
}