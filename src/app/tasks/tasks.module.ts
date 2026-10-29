
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { TasksRoutingModule } from './tasks-routing.module'
import { TasksComponent } from './tasks/tasks.component'
import { TaskCardComponent } from './task-card/task-card.component'

@NgModule({
  imports: [
    NativeScriptCommonModule,
    TasksRoutingModule,
  ],
  declarations: [
    TasksComponent,
    TaskCardComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TasksModule {}
