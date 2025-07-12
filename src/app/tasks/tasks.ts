import { Component, Input } from '@angular/core';
import { Task } from "./task/task";
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTask } from "./new-task/new-task";
import { NewTaskData } from '../models/User';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
@Input() userId!:string ;
@Input() name!:string;
tasks = DUMMY_TASKS;
isAddingTask = false;

get seletedUserTasks() {
  return this.tasks.filter((task) => task.userId === this.userId) ;
}

onCompleteTask(id:string)
{
   this.tasks =  this.tasks.filter((task) => task.id !== id) ;

}

addDummyTask() {
  const newTask = {
    id: 'new_' + Date.now(), // unique ID
    userId: this.userId,
    title: 'New Task',
    summary: 'This is a newly added dummy task.',
    dueDate: '2025-12-31'
  };

  this.tasks = [newTask, ...this.tasks]; // Add at the beginning
}

onStartAddTask(){
this.isAddingTask = true;
}

onCancelAddTask(){
this.isAddingTask = false;
}

onAddTask(taskData:NewTaskData) {
  const newTask = {
    id: 'new_' + Date.now(), // unique ID
    userId: this.userId,
    title: taskData.title,
    summary: taskData.summary,
    dueDate: taskData.date
  };

  this.tasks = [newTask, ...this.tasks]; // Add at the beginning

  this.isAddingTask = false;

}


}
