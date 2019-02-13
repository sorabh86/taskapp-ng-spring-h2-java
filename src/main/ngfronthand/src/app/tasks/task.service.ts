import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

import {Task} from "./task.model";
import {Subject} from "rxjs";

@Injectable()
export class TaskService {
  taskAdded:Subject<Task> = new Subject<Task>();

  constructor(private http:HttpClient) {}

  getTasks() {
    return this.http.get<Task[]>('/api/tasks');
  }

  saveTask(task:Task, checked:boolean) {
    task.completed = checked;
    return this.http.post('/api/tasks/save', task);
  }

  addTask(task:Task) {
    return this.http.post('/api/tasks/save', task);
  }
}
