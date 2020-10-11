import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipos: any[] = [
    {
      nombre: 'Real Madrid FC',
      pais: 'España',
    },    
    {
      nombre: 'Juventus FC',
      pais: 'Italia',
    },
  ];

  constructor() {
  }

  obtenerEquipos() {
    return this.equipos;
  }

  obtenerEquipo(id) {
    return this.equipos[id];
  }
}
