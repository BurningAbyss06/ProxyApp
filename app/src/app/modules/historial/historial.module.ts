import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavFooterModule } from '../nav-footer/nav-footer.module';

import { HistorialInicioComponent } from 'src/app/components/historial/historial-inicio/historial-inicio.component';
import { DetallesComponent } from 'src/app/components/historial/detalles/detalles.component';

@NgModule({
  declarations: [
    HistorialInicioComponent, 
    DetallesComponent,
  ],
  imports: [
    CommonModule, 
    NavFooterModule
  ], 
  exports: [
    HistorialInicioComponent,
    DetallesComponent,
  ]
})
export class HistorialModule { }
