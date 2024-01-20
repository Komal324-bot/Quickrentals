package com.stackroute.productservice.controller;

import com.stackroute.productservice.entity.Product;
import com.stackroute.productservice.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductUserController {
    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProducts(){
        List<Product> products =  productService.getAllProduct();
        if(!products.isEmpty()) {
            return new ResponseEntity<List<Product>>(
                    products,
                    HttpStatus.OK);
        }
        return new ResponseEntity<List<Product>>(
                HttpStatus.NOT_FOUND);
    }
    @GetMapping(value="/products", params = "category")
    public ResponseEntity<List<Product>> getAllProductByCategory(@RequestParam("category") String category){


        List<Product> products = productService.getAllProductByCategory(category);
        if(!products.isEmpty()) {
            return new ResponseEntity<List<Product>>(
                    products,
                    HttpStatus.OK);
        }
        return new ResponseEntity<List<Product>>(
                HttpStatus.NOT_FOUND);
    }
    @GetMapping ("/products/{id}")
    public ResponseEntity<?> getOneProductById(@PathVariable("id")  String id){

       Optional<Product> product =  productService.getProductById(id);

        if (product.isPresent()) {
            return ResponseEntity.ok(product.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping(value="/products", params = "address")
    public ResponseEntity<List<Product>> getAllProductByLocation(@RequestParam("address") String address){

     System.out.println(address);
        List<Product> products = productService.getAllProductByAddress(address);
        if(!products.isEmpty()) {
            return new ResponseEntity<List<Product>>(
                    products,
                    HttpStatus.OK);
        }
        return new ResponseEntity<List<Product>>(
                HttpStatus.NOT_FOUND);
    }


}
