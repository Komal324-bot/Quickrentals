package com.stackroute.userservice.repository;

import com.stackroute.userservice.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User,Integer> {
    User findByEmail(String email);
}
