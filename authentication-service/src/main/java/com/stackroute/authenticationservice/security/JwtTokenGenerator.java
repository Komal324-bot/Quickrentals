package com.stackroute.authenticationservice.security;

import com.stackroute.authenticationservice.domain.User;
import org.springframework.stereotype.Service;

import java.util.Map;


public interface JwtTokenGenerator {
    Map<String,String> generateToken(User user);

}
