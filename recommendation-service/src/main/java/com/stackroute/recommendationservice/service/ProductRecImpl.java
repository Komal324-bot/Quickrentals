package com.stackroute.recommendationservice.service;

import com.stackroute.recommendationservice.exception.ProductNotFoundException;
import com.stackroute.recommendationservice.model.User;
import com.stackroute.recommendationservice.repository.ProductRepo;
import com.stackroute.recommendationservice.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;

@Service
public class ProductRecImpl implements ProductRecServiceDao{
    @Autowired
    ProductRepo productRepo;

    @Autowired
    UserRepo userRepo;

//    @Override
//    public void addNode(User user) {
//        if(userRepo.findById(user.getUserId()).isEmpty()){
//            userRepo.save(user);
//        }
//        if(productRepo.findById(user.getUserId()).isEmpty()){
//            Product newProduct = new Product(user.getUserId(),user.getUserAddress());
//            productRepo.save(newProduct);
//        }
//        userRepo.createAddressRelationshipWithUser(user.getUserAddress(), user.getUserAddress());
//    }
//
//    @Override
//    public void addProductNode(Product product) {
//        if(productRepo.findById(product.getProductId()).isEmpty()){
//            productRepo.save(product);
//        }
//    }

    @Override
    public HashSet<User> getProductByAddress(String address) throws ProductNotFoundException {
        HashSet<User> product= userRepo.getProductByAddress(address);
        if(product.isEmpty()){
            throw new ProductNotFoundException("product not found");
        }
        else
            return product;
    }

    @Override
    public String deleteNode(String id){
        User user1 = null;
        Optional<User> userOptional = userRepo.findById(id);
        if(userOptional.isPresent()){
            userRepo.deleteUser(id);
            return "yes";
        }
        return "Not found";
    }
}
