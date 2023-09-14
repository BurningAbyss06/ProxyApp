import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HistorialInicioComponent } from './components/historial/historial-inicio/historial-inicio.component';

const routes: Routes = [
  {path: "", component: LoginComponent}, 
  {path: "historial", component: HistorialInicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
