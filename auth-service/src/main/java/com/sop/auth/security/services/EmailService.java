//package com.sop.auth.security.services;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.mail.SimpleMailMessage;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.mail.javamail.JavaMailSenderImpl;
//import org.springframework.stereotype.Service;
//
//@Service
//public class EmailService {
//    @Autowired
//    private JavaMailSender javaMailSender;
//
//
//    public void sendMail(String toEmail, String subject, String message) {
//
//        SimpleMailMessage mailMessage = new SimpleMailMessage();
//
//        mailMessage.setTo(toEmail);
//        mailMessage.setSubject(subject);
//        mailMessage.setText(message);
//        mailMessage.setFrom("Payments Micro-Service<no-reply@mailtrap.io>");
//        javaMailSender.send(mailMessage);
//    }
//}
