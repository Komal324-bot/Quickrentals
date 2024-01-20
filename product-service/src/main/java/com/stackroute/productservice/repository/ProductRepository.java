package com.stackroute.productservice.repository;

import com.stackroute.productservice.entity.Product;
import org.springframework.data.mongodb.repository.MongoRepository;


import java.util.List;

public interface ProductRepository extends MongoRepository<Product,String> {
    List<Product> findAllByCategory(String category);
    List<Product> findAllByAddress(String location);
}
//select * from product where category =