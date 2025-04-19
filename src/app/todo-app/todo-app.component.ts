import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { MainComponent } from '../components/main/main.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-todo-app',
  imports: [HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.css',
})
export class TodoAppComponent {}
