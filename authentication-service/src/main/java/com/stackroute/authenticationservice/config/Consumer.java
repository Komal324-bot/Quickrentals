package com.stackroute.authenticationservice.config;


import com.stackroute.authenticationservice.domain.User;
import com.stackroute.authenticationservice.exception.UserAlreadyExistsException;
import com.stackroute.authenticationservice.rabbitmq.UserDTO;
import com.stackroute.authenticationservice.service.UserServiceImpl;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Consumer {
    @Autowired
    private UserServiceImpl userService;

    @RabbitListener(queues="user_queue")
    public void getUserDtoFromRabbitMq(UserDTO userDto) throws UserAlreadyExistsException
    {
        User user=new User();
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        userService.saveUser(user);
    }
}
