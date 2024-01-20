package com.stackroute.productservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.productservice.entity.Product;
import com.stackroute.productservice.service.ProductService;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.logging.Logger;
import org.springframework.web.multipart.MultipartFile;

import java.io.DataInput;
import java.io.IOException;
import java.util.Base64;
import java.util.Optional;
import java.util.logging.Logger;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("admin/")

public class ProductAdminController {

    private ProductService productService;
    private ResponseEntity responseEntity;

    @Autowired
  private ObjectMapper mapper;

    @Autowired
   public ProductAdminController(ProductService productService){
       this.productService=productService;
   }
    @PostMapping(value = {"products"})
    public ResponseEntity<Product> addProduct(@RequestBody Product product) throws IOException {


        return new ResponseEntity<>(productService.addProduct(product), HttpStatus.CREATED);



    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable("id") String id){
        Optional<Product> product = productService.getProductById(id);
        if(product != null) {
            try {
                productService.deleteProduct(id);
                return new ResponseEntity<Void>(
                        HttpStatus.OK);
            }catch (Exception e) {
                e.printStackTrace();
                return new ResponseEntity<Void>(

                        HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
    }

}
