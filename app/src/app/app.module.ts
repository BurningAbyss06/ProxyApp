import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginModule } from './modules/login/login.module';
import { NavFooterModule } from './modules/nav-footer/nav-footer.module';

import { HistorialModule } from './modules/historial/historial.module';
import { EstadisticasModule } from './modules/estadisticas/estadisticas.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    LoginModule, 
    NavFooterModule,
    HistorialModule, 
    EstadisticasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
