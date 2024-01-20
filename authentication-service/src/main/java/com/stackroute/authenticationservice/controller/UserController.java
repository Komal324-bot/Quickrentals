package com.stackroute.authenticationservice.controller;


import com.stackroute.authenticationservice.domain.User;
import com.stackroute.authenticationservice.exception.InvalidCredentialsException;
import com.stackroute.authenticationservice.exception.UserAlreadyExistsException;
import com.stackroute.authenticationservice.exception.UserNotFound;
import com.stackroute.authenticationservice.security.JwtTokenGenerator;
import com.stackroute.authenticationservice.security.SecurityTokenGenerator;
import com.stackroute.authenticationservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private JwtTokenGenerator jwtTokenGenerator;
    private ResponseEntity responseEntity;
    @PostMapping("/login")
    @CrossOrigin("http://localhost:4200/")
    public ResponseEntity loginUser(@RequestBody User user) throws UserNotFound {
        System.out.println("---------------------------------------------------------");
        Map<String, String> map = null;
        try {
            User userObj = userService.findByEmailAndPassword(user.getEmail(), user.getPassword());
            if (userObj.getEmail().equals(user.getEmail())) {
                map = jwtTokenGenerator.generateToken(user); // token is generated
            }
            map.put("email",userObj.getEmail());
            responseEntity = new ResponseEntity(map, HttpStatus.OK);
        } catch (Exception e){
            responseEntity = new ResponseEntity("Try after sometime!!!", HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (InvalidCredentialsException e) {
            throw new RuntimeException(e);
        }
        return responseEntity;
    }



}
