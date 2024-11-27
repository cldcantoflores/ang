import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bienvenido a mi primera aplicación con Angular!';
  tasks =[
    'Instalar Anglular Cli',
    'Crear proyecto',
    'Crear componentes'
  ];
}
