import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicioestudiante',
  templateUrl: './inicioestudiante.page.html',
  styleUrls: ['./inicioestudiante.page.scss'],
})
export class InicioestudiantePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cerrarSesion(){
    localStorage.removeItem('datosUsuario');
    localStorage.removeItem('datosTipoUsuario');
    localStorage.removeItem('datosTipoUsuarioTemporal');
    window.location.href = '/login';
  }


}
