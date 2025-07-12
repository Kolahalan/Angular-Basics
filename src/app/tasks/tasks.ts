import { Component, Input } from '@angular/core';
import { Task } from "./task/task";
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTask } from "./new-task/new-task";
import { NewTaskData } from '../models/User';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
@Input() userId!:string ;
@Input() name!:string;
//tasks = DUMMY_TASKS;
isAddingTask = false;

constructor(private tasksService:TasksService) {} //Dependency Injection

get seletedUserTasks() {
  return  this.tasksService.getUserTasks(this.userId);
}

// addDummyTask() {
//   const newTask = {
//     id: 'new_' + Date.now(), // unique ID
//     userId: this.userId,
//     title: 'New Task',
//     summary: 'This is a newly added dummy task.',
//     dueDate: '2025-12-31'
//   };

//   //this.tasks = [newTask, ...this.tasks]; // Add at the beginning
// }

onStartAddTask(){
this.isAddingTask = true;
}

onCloseAddTask(){
this.isAddingTask = false;
}

// onAddTask(taskData:NewTaskData) {
//   const newTask = {
//     id: 'new_' + Date.now(), // unique ID
//     userId: this.userId,
//     title: taskData.title,
//     summary: taskData.summary,
//     dueDate: taskData.date
//   };

//   //this.tasks = [newTask, ...this.tasks]; // Add at the beginning

//   this.isAddingTask = false;

// }


}
