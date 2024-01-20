package com.stackroute.recommendationservice.repository;

import com.stackroute.recommendationservice.model.Product;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepo extends Neo4jRepository<Product, String> {

}
