package com.stackroute.chatservice.ChatService.controller;

import com.stackroute.chatservice.ChatService.config.Producer;
import com.stackroute.chatservice.ChatService.model.ChatMessage;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;
import java.util.Queue;

@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private Producer producer;

    Queue<ChatMessage> queueUserData=new LinkedList<ChatMessage>();

    @PostMapping("/sendAdminDataToUser")
//    @CrossOrigin("http://localhost:4200/")
//    @CrossOrigin("http://localhost:54013/")
    @CrossOrigin({"http://localhost:4200", "http://localhost:54013"})
    public void sendDataAdminToUser(@RequestBody ChatMessage chat) {
        System.out.println(chat);
        producer.sendMessageToRabbitMqAdminToUser(chat);
        System.out.println("sending UserDataToAdmin");

    }

    @RabbitListener(queues="user_queue10")
    public void producerMessage(ChatMessage chatMessage) {
    if(chatMessage.getMessage()!=null){
        queueUserData.add(chatMessage);
        System.out.println(queueUserData);
    }
}
    @GetMapping("/getUserToAdmin")
//    @CrossOrigin("http://localhost:4200/")
//    @CrossOrigin("http://localhost:65289/")
    @CrossOrigin("http://localhost:54013/")
    public ChatMessage getUserToAdmin(){
        if(queueUserData.size()>0) {
            return queueUserData.poll();
        }
        return null;
    }
}
