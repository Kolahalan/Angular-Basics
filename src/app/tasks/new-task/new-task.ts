import { Component, output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  cancel = output<void>();
  onCancel(){
    this.cancel.emit()
  }
}
