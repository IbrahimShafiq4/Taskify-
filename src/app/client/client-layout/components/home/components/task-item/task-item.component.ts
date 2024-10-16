import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ITask, TaskService } from '../../../../services/tasks.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
})
export class TaskItemComponent {
  task: ITask = {
    completed: false,
    id: 0,
    title: '',
    image: '',
    text: '',
  };

  taskId: number = 0;

  @Output() toggle = new EventEmitter<void>();

  toggleTask(): void {
    this.toggle.emit();
  }

  private _TaskService = inject(TaskService);
  private _ActivatedRoute = inject(ActivatedRoute);

  checkRoute(): void {
    this._ActivatedRoute.params.subscribe((params: Params) => {
      this.taskId = +params['id'];
      this.getSpecificTask(--this.taskId)
    });
  }

  ngOnInit(): void {
    this.checkRoute();
  }

  getSpecificTask(taskId: number): void {
    this._TaskService.getTasks().subscribe((task) => {
      this.task = task[taskId];
    });
  }

  onToggleTaskState(): void {
    this.task.completed = !this.task.completed
  }
}
