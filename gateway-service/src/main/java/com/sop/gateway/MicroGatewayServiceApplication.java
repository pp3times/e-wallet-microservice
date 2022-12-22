package com.sop.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class MicroGatewayServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(MicroGatewayServiceApplication.class, args);
		System.out.println("Gateway Service Stated ..!");
	}


}

