import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ITask {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})

export class TaskService {
  tasks: ITask[] = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: false },
    { id: 3, title: 'Task 3', completed: true },
  ];

  getTasks(): Observable<ITask[]> {
    return of(this.tasks);
  }
}
