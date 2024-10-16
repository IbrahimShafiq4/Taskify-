import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from './client-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './header/header.component';
import { TaskItemComponent } from './components/home/components/task-item/task-item.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
        title: 'home',
        children: [
          {
            path: 'task-item/:id',
            component: TaskItemComponent,
            title: 'Task Item',
          },
        ],
      },
    ],
  },
];

@NgModule({
  declarations: [ClientLayoutComponent],
  imports: [CommonModule, RouterModule.forChild(routes), HeaderComponent],
  exports: [RouterModule],
})
export class ClientLayoutModule {}
