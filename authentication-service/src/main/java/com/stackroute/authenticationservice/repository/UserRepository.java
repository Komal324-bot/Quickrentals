package com.stackroute.authenticationservice.repository;

import com.stackroute.authenticationservice.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {


    User findByEmailAndPassword(String email, String password);
}
