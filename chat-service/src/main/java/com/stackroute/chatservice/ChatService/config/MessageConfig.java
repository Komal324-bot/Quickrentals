package com.stackroute.chatservice.ChatService.config;

import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class MessageConfig {
    public static final String QUEUE_USER = "user_queue10";
    public static final String EXCHANGE= "exchange10";
    public static final String ROUTING_KEY_USER = "user_key10";
     public static final String QUEUE_ADMIN = "Admin_queue10";
     public static final String ROUTING_KEY_ADMIN = "Admin_key10";


    @Bean
    public Queue user_queue(){
        return new Queue(QUEUE_USER,true);
    }

    @Bean
    public Queue seller_queue(){
        return new Queue(QUEUE_ADMIN,false);

    }

    @Bean
    public DirectExchange directExchange(){
        return new DirectExchange(EXCHANGE);
    }

    @Bean
    public Binding bindingBuilder(Queue user_queue, DirectExchange exchange){
        return BindingBuilder.bind(user_queue()).to(exchange).with(ROUTING_KEY_USER);
    }

        @Bean
    public Binding bindingBuilderSeller(Queue seller_queue, DirectExchange exchange){
        return BindingBuilder.bind(seller_queue()).to(exchange).with(ROUTING_KEY_ADMIN);
    }
    @Bean
    public MessageConverter converter() {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public AmqpTemplate template(ConnectionFactory connectionFactory) {
        final RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
        rabbitTemplate.setMessageConverter(converter());
        return rabbitTemplate;
    }
}
