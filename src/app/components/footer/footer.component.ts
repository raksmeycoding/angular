import { Component, computed, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { EFilter } from '../../types/filter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  todosService = inject(TodosService);
  filterSig = this.todosService.filterSignal;
  filterEnum = EFilter;
  activeCount = computed(() => {
    return this.todosService.todosSignal().filter((todo) => !todo.isCompleted)
      .length;
  });
  noTodosClass = computed(() => this.todosService.todosSignal().length === 0);
  itemsLeftText = computed(
    () => `item${this.activeCount() !== 1 ? 's' : ''} left`
  );

  changeFilter(event: Event, filterName: EFilter): void {
    event.preventDefault();
    this.todosService.changeFilter(filterName);
    console.log('after changeFilter', this.todosService.filterSignal());
  }
}
