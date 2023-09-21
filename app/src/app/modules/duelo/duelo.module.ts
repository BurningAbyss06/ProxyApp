import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavFooterModule } from '../nav-footer/nav-footer.module';

import { DueloComponent } from 'src/app/components/duelos/duelo/duelo.component';
import { NuevoDeckComponent } from 'src/app/components/duelos/nuevo-deck/nuevo-deck/nuevo-deck.component';

@NgModule({
  declarations: [
    DueloComponent,
    NuevoDeckComponent
  ],
  imports: [
    CommonModule, 
    NavFooterModule
  ], 
  exports: [
    DueloComponent,
    NuevoDeckComponent
  ]
})
export class DueloModule { }
