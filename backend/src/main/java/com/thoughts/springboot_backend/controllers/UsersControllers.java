package com.thoughts.springboot_backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thoughts.springboot_backend.repository.UsersRepository;
import com.thoughts.springboot_backend.model.Users;
import org.springframework.web.bind.annotation.GetMapping; 

@RestController
@RequestMapping("/api/v1/")
public class UsersControllers {

    @Autowired
    private UsersRepository usersRepository;

    // get all users
    @GetMapping("/users")
    public List<Users> getAllUsers() {
        return usersRepository.findAll();
    }
}
