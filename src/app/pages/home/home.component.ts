import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Task} from './../../models/tasks.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  welcome ='Hola';
  tasks =signal<Task[]>([
    {
      id: Date.now(),
      title: 'Crear proyecto',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear componentes',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear servicio',
      completed: false
    }
  ]);
  userObjectField: any;

  changeHandler(event: Event){
    const input  = event.target as HTMLInputElement;
    const newTask = input.value;
    //this.tasks.update((tasks  => [...tasks, newTask] ))
    this.addTask(newTask);
  }

  addTask(title: string){
    const newTask ={
      id:Date.now(),
      title,
      completed : false
    }

    this.tasks.update((tasks  => [...tasks, newTask] ));
  }

  updateTask(index:number,status:boolean){
   const est = (status==false)?"completa":"incompleta";
    if(confirm("Confirma que quiere marcar como "+est+" ?")){
    
        this.tasks.update((tasks) =>
        tasks.map((task, i) =>
          i === index ? { ...task, completed: !task.completed }: task
        )
      )
  
    }
  }

  deleteTask(index: number){
    if(confirm("Are you sure to delete? ")) {
     this.tasks.update((tasks) => tasks.filter((task, position) => position !== index));
    }
    }
}
