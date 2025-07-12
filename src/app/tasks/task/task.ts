import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_TASKS } from '../../dummy-tasks';
import { UserTask } from '../../models/User';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required:true}) task!: UserTask;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
