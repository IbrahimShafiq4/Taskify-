import { Component, input, InputSignal, signal } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { ITask, TaskService } from '../../../../services/tasks.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent, CommonModule, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})

export class TaskListComponent {
  tasks: InputSignal<ITask[] | undefined> = input.required({});
}
