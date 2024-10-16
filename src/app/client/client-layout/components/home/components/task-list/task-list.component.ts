import { Component } from '@angular/core';
import { TaskItemComponent } from "../task-item/task-item.component";
import { ITask, TaskService } from '../../../../services/tasks.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  tasks: ITask[] = [];

  constructor(private _TaskService: TaskService) {}

  ngOnInit(): void {
    this._TaskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  toggleCompletion(task: ITask): void {
    task.completed = !task.completed;
  }
}
