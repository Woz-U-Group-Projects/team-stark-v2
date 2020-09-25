package com.example.groupproject.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//Sheila comment: CrossOrigin annotation blocked out b/c not used
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
//Sheila comment: REquestParam annotation blocked out b/c not used
>>>>>>> dev
//import org.springframework.web.bind.annotation.RequestParam;
=======
//Sheila comment: RequestParam annotation blocked out b/c not used
// import org.springframework.web.bind.annotation.RequestParam;
>>>>>>> Stashed changes

import com.example.groupproject.models.Task;
import com.example.groupproject.models.TaskRepository;

@RestController

@RequestMapping("/tasks")
public class TaskController {

  @Autowired
  private TaskRepository taskRepository;

  @GetMapping()
  public List<Task> getTasks() {
    return taskRepository.findAll();
  }

  @PostMapping()
  public Task addTask(@RequestBody Task task) {
    return taskRepository.save(task);
  }

  @DeleteMapping("/{id}")
  public void deleteTask(@PathVariable Long id) {
    taskRepository.deleteById(id);
  }

  @PutMapping("/{id}")
  public Task updateProject(@PathVariable Long id, @RequestBody Task task) {
    Task foundTask = taskRepository.findById(id).orElse(null);
    if (foundTask != null) {
    	foundTask.setName(task.getName());
    	foundTask.setComplete(task.getComplete());
    	taskRepository.save(foundTask);
      return foundTask;
    }
    return null;
  }

}