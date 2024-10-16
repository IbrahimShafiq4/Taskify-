import { Component } from '@angular/core';
import { TaskItemComponent } from "./components/task-item/task-item.component";
import { TaskListComponent } from "./components/task-list/task-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskItemComponent, TaskListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
