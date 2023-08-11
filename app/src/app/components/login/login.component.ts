import { Component } from '@angular/core';
import { JugadorModel } from 'src/app/models/JugadorModel';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public datosLogin(datos: NgForm){
    let jugador!: JugadorModel;
    jugador.username = datos.value['username'];
    jugador.password = datos.value['password'];
    
  }
}
