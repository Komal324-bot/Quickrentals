package com.stackroute.productservice.payload;

import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDto {
    private String id = UUID.randomUUID().toString();
    private String productName;
    private String description;
    private double price;
    private int quantity;
    private String address;
    private  String sellerEmail;
    private String sellerName;
    private  byte[] image;
    private String category;
}
