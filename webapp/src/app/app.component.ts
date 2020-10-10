import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webapp';
  show: boolean = true;
  fondo: string = '';
  cursos: string[] = ['HTML', 'AngularJS', 'ReactJS'];
  animales: any[] = [
    { tipo: 'perro', nombre: 'Sasha', edad: 1 },
    { tipo: 'tortuga', nombre: 'Alicia', edad: 29 },
    { tipo: 'delfin', nombre: 'Flipper', edad: 12 },
  ]
}
