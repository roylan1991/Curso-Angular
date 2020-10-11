import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipoService } from './../equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  equipo: any = {};

  constructor(private _ruta: ActivatedRoute, private _servicio: EquipoService) {
    this._ruta.params.subscribe(params => {
      this.equipo = this._servicio.obtenerEquipo(params['id']);
    })
  }

  ngOnInit(): void {
  }

}
