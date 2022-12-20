package com.sop.notification.repository;

import com.sop.notification.model.TransactionLogs;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionLogsRepository extends JpaRepository<TransactionLogs, Long> {
}
