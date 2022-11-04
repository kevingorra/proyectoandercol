import { Component, OnInit } from '@angular/core';
import { ZonasService } from '../services/zonas.service';
import{Color,ScaleType,LegendPosition}from'@swimlane/ngx-charts';
// import { multi } from './data';

@Component({
  selector: 'app-grafica2',
  templateUrl: './grafica2.component.html',
  styleUrls: ['./grafica2.component.css']
})
export class Grafica2Component  {
  
  // multi!: any[];
  view:[number,number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition:LegendPosition=LegendPosition.Below ;
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Regional Medellin';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Metros Cubicos (m3)';
  legendTitle: string = 'Volumen';

  colorScheme :Color= {
    name:'colorestcc',
    selectable:true,
    group:ScaleType.Ordinal,


    domain: ['#75F38A', '#FFF000', '#FF1700', '#005DFF','#000000' ]
  };

  // constructor() {
  //   Object.assign(this, { multi })
  // }

  multy:any[]=[]

  constructor(public servicioZonas:ZonasService) {
   this.servicioZonas.consultarZonas()
   .subscribe(respuesta=>{
    this.multy=respuesta.map((zona:any)=>{
      return[{
        name:zona.nombre,
        series:[{name:zona.disponible,
          value:zona.disponible},{name:zona.disponible,
            value:zona.disponible}]
        
      }]
   });
  })
  };

  get multi(){
    return  this.multy
  }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}




