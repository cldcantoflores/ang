import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-labs',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome ='Hola';
  tasks =[
    'Instalar Angular Cli',
    'Crear proyecto',
    'Crear componentes'
  ];
  nombre="clao";
  edad=42;
}
