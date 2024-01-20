package com.stackroute.recommendationservice.service;

import com.stackroute.recommendationservice.exception.ProductNotFoundException;
import com.stackroute.recommendationservice.model.User;

import java.util.HashSet;

public interface ProductRecServiceDao {

//    void addNode(User user);
//
//    void addProductNode(Product product);

    HashSet<User> getProductByAddress(String address) throws ProductNotFoundException;

    String deleteNode(String id);
}
