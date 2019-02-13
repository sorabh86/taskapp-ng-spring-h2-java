import { Component, OnInit } from '@angular/core';

import {Task} from "../task.model";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

    tasks:Task[] = [];

  constructor(private taskService:TaskService) { }

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe((tasks:Task[]) => {
        this.tasks = tasks;
      });

    this.taskService.taskAdded
      .subscribe((task:Task) => {
        this.tasks.push(task);
      })
  }

  getDueDateLabel (task:Task) {
    return task.completed ? 'badge-success' : 'badge-primary';
  }

  onTaskChanged(event, task) {
    this.taskService.saveTask(task, event.target.checked)
      .subscribe((task)=>{
        console.log('savetask', task);
      }, (error)=> {
        console.log('savetask:error', error);
      });
  }

}
