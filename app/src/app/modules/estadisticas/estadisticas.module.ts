import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavFooterModule } from '../nav-footer/nav-footer.module';

import { EstadisticasComponent } from 'src/app/components/estadisticas/estadisticas.component';

@NgModule({
  declarations: [
    EstadisticasComponent,
  ],
  imports: [
    CommonModule, 
    NavFooterModule
  ], 
  exports: [
    EstadisticasComponent,
  ]
})
export class EstadisticasModule { }
