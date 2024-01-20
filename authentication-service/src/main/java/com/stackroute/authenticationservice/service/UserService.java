package com.stackroute.authenticationservice.service;

import com.stackroute.authenticationservice.domain.User;
import com.stackroute.authenticationservice.exception.InvalidCredentialsException;
import com.stackroute.authenticationservice.exception.UserAlreadyExistsException;

import java.util.List;

public interface UserService {
    User saveUser(User user) throws UserAlreadyExistsException;

    User findByEmailAndPassword(String email, String password) throws InvalidCredentialsException;

    List<User> getAllUsers();
}
