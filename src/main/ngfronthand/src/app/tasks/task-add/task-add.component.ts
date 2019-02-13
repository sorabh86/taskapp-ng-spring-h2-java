import {Component, Input} from '@angular/core';
import {TaskService} from "../task.service";
import {Task} from "../task.model";

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {
  addTaskValue:string = 'sorabh86';

  constructor(private taskService:TaskService) { }

  onTaskAdd(event) {
    let task:Task = new Task(event.target.value, false, this.getTodayAsString());
    this.taskService.addTask(task)
      .subscribe((newTask:Task) => {
        this.addTaskValue = '';
        this.taskService.taskAdded.next(newTask);
      });
  }

  getTodayAsString() {
    let today:any = new Date();
    let dd:string = today.getDate();
    let mm:string = today.getMonth() + 1; //January is 0!
    let yyyy:string = today.getFullYear();

    if (+dd < 10)
      dd = '0' + dd;

    if (+mm < 10)
      mm = '0' + mm;

    return mm+'/'+dd+'/'+yyyy;
  }
}
