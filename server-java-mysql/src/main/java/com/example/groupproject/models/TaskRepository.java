package com.example.groupproject.models;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.groupproject.models.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
	//Task findByUsername(String username); // DO WE NEED THIS?
	//Task findByID(Long task); // OR THIS?
}