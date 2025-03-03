package com.thoughts.springboot_backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thoughts.springboot_backend.repository.UsersRepository;
import com.thoughts.springboot_backend.model.Users;
import org.springframework.web.bind.annotation.GetMapping; 
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import com.thoughts.springboot_backend.exception.ResourceNotFoundException;

@CrossOrigin(origins = "http://localhost:4200") // Allow requests from Angular
@RestController
@RequestMapping("/api/v1")
public class UsersControllers {

    @Autowired
    private UsersRepository usersRepository;

    // get all users
    @GetMapping("/users")
    public List<Users> getAllUsers() {
        return usersRepository.findAll();
    }

    // create user rest api
    @PostMapping("/users")
    public Users createUser(@RequestBody Users user) {
        return usersRepository.save(user);
    }

    //get user by id
    @GetMapping("/users/{id}")
    public ResponseEntity<Users> getUserById(@PathVariable Long id) {
        Users user = usersRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Check again, User not exist with id :" + id));
        return ResponseEntity.ok(user);
    }
}
