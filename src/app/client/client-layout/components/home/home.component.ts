import { Component, inject } from '@angular/core';
import { TaskItemComponent } from "./components/task-item/task-item.component";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { HeaderComponent } from "../../header/header.component";
import { ITask, TaskService } from '../../services/tasks.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskItemComponent, TaskListComponent, HeaderComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  tasks: ITask[] = [];
  private _TaskService = inject(TaskService);

  ngOnInit(): void {
    this.onGetTasks()
  }

  onGetTasks() {
    this._TaskService.getTasks().subscribe(tasks => {
      this.tasks = tasks
    })
  }
}
