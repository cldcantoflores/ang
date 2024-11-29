import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  welcome ='Hola';
  tasks =signal([
    'Instalar Angular Cli',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicios'
  ]);

  changeHandler(event: Event){
    const input  = event.target as HTMLInputElement;
    const newTask = input.value;
    this.tasks.update((tasks  => [...tasks, newTask] ))
  }

  deleteTask(index: number){
    if(confirm("Are you sure to delete? ")) {
     this.tasks.update((tasks) => tasks.filter((task, position) => position !== index));
    }
    }
}
