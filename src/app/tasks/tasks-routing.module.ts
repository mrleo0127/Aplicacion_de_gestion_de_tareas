
import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { TasksComponent } from './tasks/tasks.component'

const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class TasksRoutingModule {}
