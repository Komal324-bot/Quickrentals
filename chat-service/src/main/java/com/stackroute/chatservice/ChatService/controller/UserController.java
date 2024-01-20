package com.stackroute.chatservice.ChatService.controller;

import com.stackroute.chatservice.ChatService.config.Producer;
import com.stackroute.chatservice.ChatService.model.ChatMessage;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;
import java.util.Queue;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private Producer producer;
    Queue<ChatMessage> queueAdminToUser=new LinkedList<ChatMessage>();
    @PostMapping("/sendUserDataToAdmin")

//    @CrossOrigin("http://localhost:4200/")
//    @CrossOrigin("http://localhost:54013/")
    @CrossOrigin({"http://localhost:4200", "http://localhost:54013"})
    public void sendDataUserToAdmin(@RequestBody ChatMessage chat){
        producer.sendMessageToRabbitMqUserToAdmin(chat);
        System.out.println(chat);
    }

    @RabbitListener(queues="Admin_queue10")
    public void producerMessage(ChatMessage chatMessage)
    {

        if(chatMessage.getMessage()!=null){
            queueAdminToUser.add(chatMessage);
            System.out.println(queueAdminToUser);
        }


    }
    @GetMapping("/getAdminToUser")
    @CrossOrigin("http://localhost:4200/")
    public ChatMessage getUserToAdmin(){
        if(queueAdminToUser.size()>0)
            return queueAdminToUser.poll();

        return null;
    }
}
