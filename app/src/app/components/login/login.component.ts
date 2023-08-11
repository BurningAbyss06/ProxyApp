import { Component } from '@angular/core';
import { JugadorModel } from 'src/app/models/JugadorModel';
import { NgForm } from '@angular/forms';

declare let $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public datosLogin(datos: NgForm){
    let  jugador = new JugadorModel();

    jugador.username = datos.value['username'];
    console.log(jugador.username);
    jugador.password = datos.value['password'];
    console.log(jugador.password);
    let errorDatos = this.validarDatos(jugador);
    console.log(errorDatos);
  }

  public validarDatos(jugador: JugadorModel): boolean{
    let errorUsername = document.getElementById('error-username');
    let errorPassword = document.getElementById('error-password');

    if (!(jugador.username))  {      
      $(errorUsername).css("visibility", "visible");
      return true;
    }
    else if (!(jugador.password))  {      
      $(errorPassword).css("visibility", "visible");
      return true;
    }
    else {
      $(errorUsername).css("visibility", "hidden");
      $(errorPassword).css("visibility", "hidden");
      return false
    };   
  }
}
