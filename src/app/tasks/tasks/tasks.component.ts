
import { Component } from '@angular/core'
import { Application, isAndroid } from '@nativescript/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { TasksService, Task } from '../tasks.service'

@Component({
  standalone: false,
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Task[]
  platformMessage = ''

  constructor(private tasksService: TasksService) {
    this.tasks = this.tasksService.getTasks()

    if (isAndroid) {
      this.platformMessage = 'StudyFlow para Android'
    }
  }

  onDrawerButtonTap(): void {
    const sideDrawer = Application.getRootView() as RadSideDrawer
    sideDrawer.showDrawer()
  }

  toggleTask(id: number): void {
    this.tasksService.toggleTask(id)
  }

  get pendingCount(): number {
    return this.tasks.filter((task) => !task.completed).length
  }
}


