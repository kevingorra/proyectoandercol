
import { HttpClient } from '@angular/common/http';
import { Component , OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
//import { DatosService } from '../services/datos.service';
import { DataTableDirective } from 'angular-datatables';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements   OnDestroy ,OnInit {

 
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  data:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
      
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {url:'//cdn.datatables.net/plug-ins/1.12.1/i18n/es-ES.json'}
    };

    this.http.get('https://dummy.restapiexample.com/api/v1/employees')
    .subscribe((respuesta: any)=>{
      this.data=respuesta.data;
      console.log(this.data)
      this.dtTrigger.next();
    });

  
  
  }
  

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe()
  }
  

 


}
