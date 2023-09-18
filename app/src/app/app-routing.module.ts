import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HistorialInicioComponent } from './components/historial/historial-inicio/historial-inicio.component';
import { DetallesComponent } from './components/historial/detalles/detalles.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { DueloComponent } from './components/duelos/duelo/duelo.component';

const routes: Routes = [
  {path: "", component: LoginComponent}, 
  {path: "historial", component: HistorialInicioComponent},
  {path: "detalle", component: DetallesComponent}, 
  {path: "estadisticas", component: EstadisticasComponent}, 
  {path: "duelos", component: DueloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
