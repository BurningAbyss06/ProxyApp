import { Component } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  ngOnInit(): void{
    this.cambioNavbar();
  }

  public cambioNavbar(){
    var monitor = window.matchMedia("(max-width: 700px)");
    var boton = document.getElementById("boton");
    var menu = document.getElementById("navbarNav");

    if (monitor.matches){
      $(boton).css("visibility", "visible");
      $(menu).addClass("collapse");
    }
    else {
      $(boton).css("visibility", "hidden");
    }
  }

  public despliegue(){
    var menu = document.getElementById("navbarNav");

    if ($(menu).hasClass("collapse")) {
      $(menu).removeClass("collapse");
    }
    else {
      $(menu).addClass("collapse");
    }
  }
}
