package com.stackroute.recommendationservice.controller;

import com.stackroute.recommendationservice.exception.ProductNotFoundException;
import com.stackroute.recommendationservice.model.User;
import com.stackroute.recommendationservice.service.ProductRecImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;

@RestController
@RequestMapping("api/v1")
public class ProductRecController {

    @Autowired
    ProductRecImpl productRec;

    @GetMapping("recommend/{addr}")
    public ResponseEntity<?> getRecommendationsByAddress(@PathVariable String addr){
        try {
            HashSet<User> rec = productRec.getProductByAddress(addr);
            return new ResponseEntity<HashSet>(rec, HttpStatus.OK);
        } catch (ProductNotFoundException e) {
            return new ResponseEntity<String>("product unavailable", HttpStatus.CONFLICT);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteNodeById(@PathVariable("id") String id) throws ProductNotFoundException{
        String deletedNode = productRec.deleteNode(id);
        if(deletedNode.equals("yes")){
            return new ResponseEntity<>("Node deleted", HttpStatus.OK);
        }
        return new ResponseEntity<>("user not found", HttpStatus.CONFLICT);
    }

}
