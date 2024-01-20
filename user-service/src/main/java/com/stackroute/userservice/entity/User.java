package com.stackroute.userservice.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class User {
    private String id = UUID.randomUUID().toString();
    public String username;
    public String password;
    public String address;
    private String email;


}
