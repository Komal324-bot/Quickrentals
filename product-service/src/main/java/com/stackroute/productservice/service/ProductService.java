package com.stackroute.productservice.service;

import com.stackroute.productservice.entity.Product;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    public List<Product> getAllProduct();
    public Product addProduct(Product product);
    public void deleteProduct(String productId);
    public List<Product> getAllProductByCategory(String category);
    public List<Product> getAllProductByAddress(String address);
    public Optional<Product> getProductById(String id);
}
