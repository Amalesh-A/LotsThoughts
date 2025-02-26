package com.thoughts.springboot_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thoughts.springboot_backend.model.Users;

import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {
	
}
