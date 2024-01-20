package com.stackroute.authenticationservice.security;

import com.stackroute.authenticationservice.domain.User;

import java.util.Map;

public interface SecurityTokenGenerator {

    Map<String, String> generateToken(User user);
}
