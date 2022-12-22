// package com.sop.auth.security.services;

// import org.springframework.amqp.rabbit.annotation.RabbitListener;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// @Service
// public class RabbitEmailService {

//     @Autowired
//     private EmailService emailService;

//     @RabbitListener(queues="mail")
//     public void sendSignInNotification(UserDetailsImpl userDetails){
//         System.out.println("Notification is trying send");
//         String reciever = userDetails.getEmail();
//         String subject = "Sign IN NOTIFICATION";
//         String body = "Dear"+ userDetails.getUsername()+"\n"
//                 +"Your account has been sign in";

//         emailService.sendMail(reciever,subject,body);
//     }

// }
