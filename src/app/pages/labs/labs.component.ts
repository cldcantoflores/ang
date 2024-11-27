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

  person={
  nombre: "clao",
  edad:42,
  avatar : "https://w3schools.com/howto/img_avatar.png"
}

disabled=true;

clickHandler(){
  alert("Hola");
}

changeHandler(event: Event){
  console.log(event);
}

keydownHandler(event: KeyboardEvent){
  const input = event.target as HTMLInputElement;
  console.log(input.value);
}

  };//fin

  
  
