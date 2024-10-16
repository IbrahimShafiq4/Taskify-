import { Component } from '@angular/core';
import { ITask, TaskService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';
import { AllTasksItemsComponent } from "../all-tasks-items/all-tasks-items.component";

@Component({
  selector: 'app-all-tasks-list',
  standalone: true,
  imports: [CommonModule, AllTasksItemsComponent],
  templateUrl: './all-tasks-list.component.html',
  styleUrl: './all-tasks-list.component.scss',
})
export class AllTasksListComponent {
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
