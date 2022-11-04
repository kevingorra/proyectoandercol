import { ZonasService } from './../services/zonas.service';
import { MercanciasService } from './../services/mercancias.service';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

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
    this.servicioMercancias.ingresarMercancia(datosMercancia)
    .subscribe(respuesta=>{
      console.log(respuesta)
      window.location.reload()
    
    
    })

  }

  public inicializarFormulario ():FormGroup{
    return this.fabricaDiccionario.group({
      iup:['',[Validators.required]],//Validators.minLength(6)
      volumen:['',[Validators.required]],
      nombre:['',[Validators.required]],
      tipoRemitente:['',[Validators.required]],
      idRemitente:['',[Validators.required]],
      nombreRemitente:['',[Validators.required]],
      deptoRemitente:['',[Validators.required]],
      municipioRemitente:['',[Validators.required]],
      direccionRemitente:['',[Validators.required]],
      tipoDestinatario:['',[Validators.required]],
      idDestinatario:['',[Validators.required]],
      nombreDestinatario:['',[Validators.required]],
      deptoDestinatario:['',[Validators.required]],
      municipioDestinatario:['',[Validators.required]],
      direccionDestinatario:['',[Validators.required]],
      ubicacion:['',[Validators.required]],
      zona:['1',[Validators.required]]

    })

  }

  public buscarMercancia(){
    let iup=this.formulario.value.iup
    console.log(this.datosZonas)
  this.servicioMercancias.buscarMercanciaPorId(iup)
  .subscribe(respuesta=>{
   this.formulario.patchValue({
    nombre:respuesta.nombre,
    volumen:respuesta.volumen,
    tipoRemitente:respuesta.tipoRemitente,
    idRemitente:respuesta.idRemitente,
    nombreRemitente:respuesta.nombreRemitente,
    deptoRemitente:respuesta.Remitente,
    municipioRemitente:respuesta.municipioRemitente,
    direccionRemitente:respuesta.direccionRemitente,
    tipoDestinatario:respuesta.tipoDestinatario,
    idDestinatario:respuesta.idDestinatario,
    nombreDestinatario:respuesta.nombreDestinatario,
    deptoDestinatario:respuesta.deptoDestinatario,
    municipioDestinatario:respuesta.municipioDestinatario,
    direccionDestinatario:respuesta.direccionDestinatario,
    ubicacion:respuesta.ubicacion

   })
   this.formulario.disable()
   this.formulario.controls['iup'].enable()
   this.controlDeZona=false
  },
    error=>{console.log(error.error)
      this.formulario.enable()
      // this.formulario=this.inicializarFormulario()
      this.controlDeZona=true

    })
  }

  lanzarAlerta(){
    Swal.fire(
  'Good job!',
  'You clicked the button!',
  'success'
)
  }


}
