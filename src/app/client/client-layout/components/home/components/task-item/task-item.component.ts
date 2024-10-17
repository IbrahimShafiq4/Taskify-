import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ITask, TaskService } from '../../../../services/tasks.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

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

  private _TaskService = inject(TaskService);
  private _ActivatedRoute = inject(ActivatedRoute);
  private _Router = inject(Router)

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

  onDeleteTask(taskId: number): void {
    const index = this._TaskService.tasks.findIndex(task => task.id === taskId);
    if (index !== -1) {
      this._TaskService.tasks.splice(index, 1);
      this.task = {completed: false, id: 0, title: '', image: '', text: ''};
      this._Router.navigate(['../../'])
    }
  }

}
