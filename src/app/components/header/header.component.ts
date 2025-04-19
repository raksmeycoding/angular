import { Component, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Target } from '@angular/compiler';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  todoService = inject(TodosService);
  text: string = '';
  changeText(event: Event) {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    this.text = target.value;
  }
  addTodo() {
    this.todoService.addTodo(this.text);
    this.text = '';
  }
}
