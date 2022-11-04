import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MercanciaComponent } from './mercancia/mercancia.component';
import { HomeComponent } from './home/home.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';


import{ReactiveFormsModule}from '@angular/forms'
import{HttpClientModule}from'@angular/common/http'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GraficaComponent } from './grafica/grafica.component';
import { Grafica2Component } from './grafica2/grafica2.component';
import { EliminarMercanciaComponent } from './eliminar-mercancia/eliminar-mercancia.component';
import { BuscarMercanciaComponent } from './buscar-mercancia/buscar-mercancia.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { TablaComponent } from './tabla/tabla.component';
import { RegistroZonaComponent } from './registro-zona/registro-zona.component';
import { ZonaFormularioComponent } from './zona-formulario/zona-formulario.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DataTablesModule } from "angular-datatables"

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    MercanciaComponent,
    HomeComponent,
    FormularioRegistroComponent,
    GraficaComponent,
    Grafica2Component,
    EliminarMercanciaComponent,
    BuscarMercanciaComponent,
    LoginComponent,
    InicioComponent,
    TablaComponent,
    RegistroZonaComponent,
    ZonaFormularioComponent,
    DatatableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxChartsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
