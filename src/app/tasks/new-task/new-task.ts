import { Component, inject, Input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../../models/User';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Input({required:true}) userId! : string
  close = output<void>();
//  add = output<NewTaskData>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
private tasksService = inject(TasksService)

  // enteredTitle = signal(''); //signals can also be used here
  // enteredSummary = signal(''); 
  // enteredDate = signal(''); 
  onCancel() {
    this.close.emit()
  }
  onSubmit() {
  // this.add.emit({
    // title:this.enteredTitle,
    // summary:this.enteredSummary,
    // date:this.enteredDate
  // })
  this.tasksService.addTask({
    title:this.enteredTitle,
    summary:this.enteredSummary,
    date:this.enteredDate
  },this.userId);
      this.close.emit()
  }
}
