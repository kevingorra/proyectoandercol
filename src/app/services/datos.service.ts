import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  uri:string= 'https://dummy.restapiexample.com/api/v1/employees'

  constructor(public http:HttpClient) {

   }
   public traerDatos():Observable<any>{
    return this.http.get(this.uri)

   }
}
