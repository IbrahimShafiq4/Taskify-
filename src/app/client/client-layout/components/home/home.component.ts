import { Component, ComponentFactoryResolver, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { TaskItemComponent } from "./components/task-item/task-item.component";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { HeaderComponent } from "../../header/header.component";
import { ITask, TaskService } from '../../services/tasks.service';
import { RouterModule } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskItemComponent, TaskListComponent, HeaderComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  tasks: ITask[] = [];
  @ViewChild('popupContainer', { read: ViewContainerRef, static: true }) popupContainer!: ViewContainerRef;
  private _TaskService = inject(TaskService);
  private _ComponentFactoryResolver = inject(ComponentFactoryResolver)

  ngOnInit(): void {
    this.onGetTasks()
  }

  onGetTasks() {
    this._TaskService.getTasks().subscribe(tasks => {
      this.tasks = tasks
    })
  }

  onOpenAddTask(): void {
    const componentFactory = this._ComponentFactoryResolver.resolveComponentFactory(AddTaskComponent);
    this.popupContainer.clear();
    const componentRef = this.popupContainer.createComponent(componentFactory);
    componentRef.instance.close.subscribe(() => this.popupContainer.clear())
  }
}
