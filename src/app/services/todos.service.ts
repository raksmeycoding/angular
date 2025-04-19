import { effect, Injectable, signal } from '@angular/core';
import { ITodo } from '../types/todo';
import { EFilter } from '../types/filter';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todosSignal = signal<ITodo[]>([]);
  filterSignal = signal<EFilter>(EFilter.all);

  constructor() {}

  changeFilter(filterName: EFilter) {
    this.filterSignal.set(filterName);
  }

  addTodo(text: string) {
    const newTodo: ITodo = {
      text,
      isCompleted: false,
      id: Math.random().toString(16),
    };
    this.todosSignal.update((pre) => [newTodo, ...pre]);
  }

  updateTodo(id: string, text: string) {
    this.todosSignal.update((pre) =>
      pre.map((todo) => (todo.id === id ? { ...todo, text: text } : todo))
    );
  }

  removeTodo(id: string) {
    this.todosSignal.update((todos) => todos.filter((todo) => todo.id !== id));
  }

  toggleTodo(id: string) {
    this.todosSignal.update((todos) =>
      todos.filter((todo) =>
        todo.id === id
          ? ({ ...todo, isCompleted: !todo.isCompleted } as ITodo)
          : todo
      )
    );
  }

  toggleAll(isCompleted: boolean): void {
    this.todosSignal.update((todos) =>
      todos.map((todo) => ({ ...todo, isCompleted }))
    );
  }
}
