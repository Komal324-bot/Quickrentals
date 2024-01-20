package com.stackroute.userservice.service;

import com.stackroute.userservice.entity.User;
import com.stackroute.userservice.exception.UserAlreadyExistsException;

public interface UserService {

    User addUser(User user) throws UserAlreadyExistsException;
    User getUser(String email) ;
}
