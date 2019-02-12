package com.sorabh86.taskapp.service;

import com.sorabh86.taskapp.domain.Task;

public interface TaskService {

    Iterable<Task> listTasks();
    Task save(Task task);

}
