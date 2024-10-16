import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../../../services/tasks.service';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @Input() task!: ITask;
  @Output() toggle = new EventEmitter<void>();

  toggleTask(): void {
    this.toggle.emit();
  }
}
