import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavFooterModule } from '../nav-footer/nav-footer.module';

import { DueloComponent } from 'src/app/components/duelos/duelo/duelo.component';

@NgModule({
  declarations: [
    DueloComponent
  ],
  imports: [
    CommonModule, 
    NavFooterModule
  ], 
  exports: [
    DueloComponent
  ]
})
export class DueloModule { }
