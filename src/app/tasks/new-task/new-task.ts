import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../../models/User';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  cancel = output<void>();
  add = output<NewTaskData>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // enteredTitle = signal(''); //signals can also be used here
  // enteredSummary = signal(''); 
  // enteredDate = signal(''); 
  onCancel() {
    this.cancel.emit()
  }
  onSubmit() {
  this.add.emit({
    title:this.enteredTitle,
    summary:this.enteredSummary,
    date:this.enteredDate
  })
  }
}
