package com.stackroute.userservice.controller;


import com.stackroute.userservice.exception.UserAlreadyExistsException;
import com.stackroute.userservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.stackroute.userservice.entity.User;

import java.io.IOException;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/user")
public class UserController {

    private UserService userService;
    public ResponseEntity responseEntity;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
    @PostMapping("/add")
    public ResponseEntity<User> addProduct(@RequestBody User user) throws  UserAlreadyExistsException {


        return new ResponseEntity<>(userService.addUser(user), HttpStatus.CREATED);
    }
    @GetMapping("/{email}")
    public ResponseEntity<?> getOneProductById(@PathVariable  String email){
        System.out.println("---------------------------------------");
      System.out.println(email);
        Optional<User> user = Optional.ofNullable(userService.getUser(email));

        if (user.isPresent()) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }




}
