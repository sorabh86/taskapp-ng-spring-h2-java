package com.sorabh86.taskapp.repository;


import com.sorabh86.taskapp.domain.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long> {


}
