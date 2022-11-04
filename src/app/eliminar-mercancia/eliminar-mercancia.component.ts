import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ZonasService } from './../services/zonas.service';
import { MercanciasService } from '../services/mercancias.service';


@Component({
  selector: 'app-eliminar-mercancia',
  templateUrl: './eliminar-mercancia.component.html',
  styleUrls: ['./eliminar-mercancia.component.css']
})
export class EliminarMercanciaComponent implements OnInit {

  datosZonas:any[]=[];

  constructor(
    public servicioZona:ZonasService,
    public servicioMercancia:MercanciasService
    ) {
    this.servicioZona.consultarZonas()
    .subscribe(respuesta=>{
      console.log(respuesta);
      this.datosZonas=respuesta
    })
  }

  retirarMercancia(idMercancia:any):void{
    
    this.servicioMercancia.retirarMercancia(idMercancia)
    .subscribe(respuesta=>{
      console.log(respuesta)
      window.location.reload()
    })
  }

  ngOnInit(): void {
  }

}