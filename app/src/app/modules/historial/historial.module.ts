import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { HistorialInicioComponent } from 'src/app/components/historial/historial-inicio/historial-inicio.component';
import { DetallesComponent } from 'src/app/components/historial/detalles/detalles.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HistorialInicioComponent, 
    DetallesComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    HistorialInicioComponent,
    DetallesComponent
  ]
})
export class HistorialModule { }
