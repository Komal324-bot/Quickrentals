package com.stackroute.userservice.service;

import com.stackroute.userservice.config.Producer;
import com.stackroute.userservice.entity.User;
import com.stackroute.userservice.exception.UserAlreadyExistsException;

import com.stackroute.userservice.rabbit.UserDTO;
import com.stackroute.userservice.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {


    public UserRepository userRepository;
    @Autowired
    Producer producer;
    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User addUser(User user) throws UserAlreadyExistsException {

        UserDTO userdto=new UserDTO();
        userdto.setEmail(user.getEmail());
        userdto.setPassword(user.getPassword());
         User user1=userRepository.findByEmail(user.getEmail());

        if(user1!=null)
        {
            throw new UserAlreadyExistsException();
        }
        else {
             user1=userRepository.save(user);
            System.out.println("saved user in mongo");
            producer.sendMessageToRabbitMq(userdto);

        }
        return user1;

    }

    @Override
    public User getUser(String email) {

        return userRepository.findByEmail(email);
    }
}
