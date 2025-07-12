import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { UserTask } from '../../models/User';
import { Card } from "../../shared/card/card";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card,DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required:true}) task!: UserTask;
  //@Output() complete = new EventEmitter<string>();
  private tasksService = inject(TasksService)


  onCompleteTask() {
    this.tasksService.removeTasks(this.task.id);
  }
}
