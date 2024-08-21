package org.dongguk.vsa.modeul.core.config;

import com.fasterxml.jackson.databind.Module;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.dongguk.vsa.modeul.core.contants.Constants;
import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.config.SimpleRabbitListenerContainerFactory;
import org.springframework.amqp.rabbit.connection.CachingConnectionFactory;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQConfig {
    @Value("${spring.rabbitmq.host}")
    private String host;

    @Value("${spring.rabbitmq.connection-port}")
    private Integer connectionPort;

    @Value("${spring.rabbitmq.username}")
    private String username;

    @Value("${spring.rabbitmq.password}")
    private String password;

    @Bean
    public TopicExchange exchange() {
        return new TopicExchange(Constants.MODEUL_EXCHANGE_NAME, true, false);
    }

    @Bean
    public Queue userQueue() {
        return new Queue(Constants.MODEUL_USER_QUEUE_NAME, true);
    }

    @Bean
    public Queue dialogueQueue() {
        return new Queue(Constants.MODEUL_DIALOGUE_QUEUE_NAME, true);
    }

    @Bean
    public Queue storageQueue() {
        return new Queue(Constants.MODEUL_STORAGE_QUEUE_NAME, true);
    }

    @Bean
    public Binding dialogueBinding(Queue dialogueQueue, TopicExchange exchange) {
        return BindingBuilder.bind(dialogueQueue).to(exchange).with(Constants.MODEULLAK_DIALOGUE_ROUTING_KEY);
    }

    @Bean Binding storageContentBinding(Queue storageQueue, TopicExchange exchange) {
        return BindingBuilder.bind(storageQueue).to(exchange).with(Constants.MODEULLAK_STORAGE_CONTENT_ROUTING_KEY);
    }

    @Bean Binding userBinding(Queue userQueue, TopicExchange exchange) {
        return BindingBuilder.bind(userQueue).to(exchange).with(Constants.MODEULLAK_USER_ROUTING_KEY);
    }

    @Bean Binding userStorageBinding(Queue storageQueue, TopicExchange exchange) {
        return BindingBuilder.bind(storageQueue).to(exchange).with(Constants.MODEULLAK_USER_STORAGE_ROUTING_KEY);
    }

    @Bean Binding userDialogueBinding(Queue dialogueQueue, TopicExchange exchange) {
        return BindingBuilder.bind(dialogueQueue).to(exchange).with(Constants.MODEULLAK_USER_DIALOGUE_ROUTING_KEY);
    }


    @Bean
    SimpleRabbitListenerContainerFactory simpleRabbitListenerContainerFactory(ConnectionFactory connectionFactory) {
        SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();
        factory.setConnectionFactory(connectionFactory);
        return factory;
    }

    @Bean
    public ConnectionFactory connectionFactory() {
        CachingConnectionFactory connectionFactory = new CachingConnectionFactory();
        connectionFactory.setHost(host);
        connectionFactory.setPort(connectionPort);
        connectionFactory.setUsername(username);
        connectionFactory.setPassword(password);
        return connectionFactory;
    }

    @Bean
    public Jackson2JsonMessageConverter jackson2JsonMessageConverter() {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, true);
        objectMapper.registerModule(dateTimeModule());

        return new Jackson2JsonMessageConverter(objectMapper);
    }

    @Bean
    public Module dateTimeModule() {
        return new JavaTimeModule();
    }
}
