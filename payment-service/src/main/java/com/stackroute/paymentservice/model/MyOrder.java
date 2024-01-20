package com.stackroute.paymentservice.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Component
@Table(name="orders")
public class MyOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long myOrderId;

    private String orderId;

    private int amount;

    private String status;

    private String user;


    private int qty;
    private String paymentId;

    private String firstName;
    private String lastName;
    private String mobile;
    private String city;
    private String state;
    private int pinCode;
    private String address;
    private String date;
    private String time;
}
