import { Component, computed, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { CommonModule } from '@angular/common';
import { EFilter } from '../../types/filter';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-main',
  imports: [CommonModule, TodoComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  todosService = inject(TodosService);
  editingId: string | null = null;

  visibleTodos = computed(() => {
    const todos = this.todosService.todosSignal();
    const filter = this.todosService.filterSignal();

    if (filter === EFilter.active) {
      return todos.filter((todo) => !todo.isCompleted);
    } else if (filter === EFilter.completed) {
      return todos.filter((todo) => todo.isCompleted);
    }
    return todos;
  });
  isAllTodosSelected = computed(() => {
    console.log('isAllTodosSelected...');
    return this.todosService.todosSignal().every((todo) => todo.isCompleted);
  });

  noTodosClass = computed(() => this.todosService.todosSignal().length === 0);

  setEditingId(editingId: string | null): void {
    this.editingId = editingId;
  }

  toggleAllTodos(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.todosService.toggleAll(target.checked);
  }
}
