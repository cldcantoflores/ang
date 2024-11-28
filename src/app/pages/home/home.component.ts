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
}
