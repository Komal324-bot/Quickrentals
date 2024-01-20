package com.stackroute.chatservice.ChatService.config;

import com.stackroute.chatservice.ChatService.model.ChatMessage;
import lombok.AllArgsConstructor;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class Producer {

    @Autowired
    private RabbitTemplate template;
    @Autowired
    private DirectExchange directExchange;
    public void sendMessageToRabbitMqUserToAdmin(ChatMessage u){
        template.convertAndSend(directExchange.getName(), MessageConfig.ROUTING_KEY_USER, u);
    }

    public void sendMessageToRabbitMqAdminToUser(ChatMessage u){
        template.convertAndSend(directExchange.getName(), MessageConfig.ROUTING_KEY_ADMIN, u);
    }
}
