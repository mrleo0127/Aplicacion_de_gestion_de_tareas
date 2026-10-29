
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Task } from '../tasks.service'

@Component({
  standalone: false,
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css'],
})
export class TaskCardComponent {
  @Input() task!: Task
  @Output() toggle = new EventEmitter<number>()

  onToggle(): void {
    this.toggle.emit(this.task.id)
  }
}

