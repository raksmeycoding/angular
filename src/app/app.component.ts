import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { TodoAppComponent } from './todo-app/todo-app.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'all-in-one-angular-project';
}
