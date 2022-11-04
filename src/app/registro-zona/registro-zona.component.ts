import { ZonasService } from './../services/zonas.service';
import { MercanciasService } from './../services/mercancias.service';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-registro-zona',
  templateUrl: './registro-zona.component.html',
  styleUrls: ['./registro-zona.component.css']
})
export class RegistroZonaComponent implements OnInit {
  formulario!:FormGroup;
  controlDeZona:boolean=true;
  datosZonas:any[]=[];

  constructor(
    public fabricaDiccionario:FormBuilder,
    public servicioMercancias:MercanciasService,
    public servicioZonas:ZonasService,

    ) { }

  ngOnInit(): void {

    this.formulario=this.inicializarFormulario()
    this.servicioZonas.consultarZonas()
    .subscribe(respuesta=>{
      this.datosZonas=respuesta.map((zona:any)=>{
        return {nombre:zona.nombre,id:zona.id}
      })
    })

  }

  public analizarFormulario(): void{
    let datosMercancia=this.formulario.value
    
    datosMercancia.zona={id:this.formulario.value.zona}


    console.log(datosMercancia)
    this.servicioZonas.ingresarZona(datosMercancia)
    .subscribe(respuesta=>{
      console.log(respuesta)
      window.location.reload()
    
    
    })

  }

  public inicializarFormulario ():FormGroup{
    return this.fabricaDiccionario.group({
      nombre:['',[Validators.required]],//Validators.minLength(6)
      capacidad:['',[Validators.required]],
      disponible:['',[Validators.required]],
      
    })

  }
}