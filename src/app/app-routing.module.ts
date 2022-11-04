import { MercanciaComponent } from './mercancia/mercancia.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { BuscarMercanciaComponent } from './buscar-mercancia/buscar-mercancia.component';
import { EliminarMercanciaComponent } from './eliminar-mercancia/eliminar-mercancia.component';
import { ZonaFormularioComponent } from './zona-formulario/zona-formulario.component';

const routes: Routes = [
  {path:"",component:HomeComponent,pathMatch:"full"},
  {path:"mercancia",component:MercanciaComponent},
  {path:"inicio",component:InicioComponent},
  {path:"buscar",component:BuscarMercanciaComponent},
  {path:"eliminar",component:EliminarMercanciaComponent},
  {path:"zona",component:ZonaFormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
