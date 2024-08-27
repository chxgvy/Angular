import { Component, OnInit } from '@angular/core';
interface Task {
  title: string;
  completed: boolean;
}
@Component({
  selector: 'app-recap',
  standalone: true,
  imports: [],
  templateUrl: './recap.component.html',
  styleUrl: './recap.component.scss'
})
export class RecapComponent implements OnInit {
  inProgressCount = 0;
  completedCount = 0;
  ngOnInit(): void {
    const tasks: Task[] = window.history.state['tasks'] || [];
    if (tasks.length) {
      this.inProgressCount = tasks.filter(task => !task.completed).length;
      this.completedCount = tasks.filter(task => task.completed).length;
    } else {
      console.log('Aucune donnée reçue.');
    }
  }
}
