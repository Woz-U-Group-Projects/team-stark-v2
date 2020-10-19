package com.example.groupproject.models;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.groupproject.models.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

}