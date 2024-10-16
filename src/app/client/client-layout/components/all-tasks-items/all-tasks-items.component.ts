import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'zone.js/lib/zone-impl';
import { ITask } from '../../services/tasks.service';

@Component({
  selector: 'app-all-tasks-items',
  standalone: true,
  imports: [],
  templateUrl: './all-tasks-items.component.html',
  styleUrl: './all-tasks-items.component.scss'
})
export class AllTasksItemsComponent {
  @Input() task!: ITask;
  @Output() toggle = new EventEmitter<void>();

  toggleTask(): void {
    this.toggle.emit();
  }
}
