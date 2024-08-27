import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
interface Task {
  title: string;
  completed: boolean;
}
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks: Task[] = [];
  newTaskTitle: string = '';
  constructor(private router: Router) {}
  addTask() {
    if (this.newTaskTitle.trim()) {
      this.tasks.push({ title: this.newTaskTitle, completed: false });
      this.newTaskTitle = '';
    }
  }
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
  toggleTaskCompletion(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
  getInProgressCount(): number {
    return this.tasks.filter(task => !task.completed).length;
  }
  getCompletedCount(): number {
    return this.tasks.filter(task => task.completed).length;
  }
  navigateToRecap() {
    this.router.navigate(['/recap'], {
      state: {
        tasks: this.tasks
      }
    });
  }
}