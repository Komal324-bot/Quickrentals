package com.stackroute.productservice.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Lob;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Product {
    private String id = UUID.randomUUID().toString();
    private String productName;
    private String description;
    private double price;
    private int quantity;
    private String address;
    private  String sellerEmail;
    private String sellerName;

    private  String imageUrl;
    private String category;

}
