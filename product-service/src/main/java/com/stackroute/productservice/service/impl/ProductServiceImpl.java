package com.stackroute.productservice.service.impl;

import com.stackroute.productservice.entity.Product;
import com.stackroute.productservice.payload.ProductDto;
import com.stackroute.productservice.repository.ProductRepository;
import com.stackroute.productservice.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {
//    @Autowired
    private ProductRepository productRepository;
    @Autowired
   public ProductServiceImpl(ProductRepository productRepository){
       this.productRepository=productRepository;
   }

    @Override
    public List<Product> getAllProductByCategory(String category) {
        return productRepository.findAllByCategory(category);
    }

    @Override
    public List<Product> getAllProductByAddress(String address) {
        return productRepository.findAllByAddress(address);
    }

    @Override
    public Optional<Product> getProductById(String id) {
        return productRepository.findById(id);
    }
    @Override
    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }



    @Override
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public void deleteProduct(String productId) {
        productRepository.deleteById(productId);
    }

    private ProductDto mapToDto(Product product)
    {
        ProductDto productDto=new ProductDto();
        productDto.setId(product.getId());
        productDto.setProductName(product.getProductName());
        productDto.setAddress(product.getAddress());
        productDto.setPrice(product.getPrice());
        productDto.setCategory(product.getCategory());
        productDto.setDescription(product.getDescription());

        return productDto;
    }

}
