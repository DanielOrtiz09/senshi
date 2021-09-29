import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario:string = "";
  fechaNacimiento:string = "";
  contrasena:string = "";
  repitecontrasena:string = "";
  mensajeContrasena: any = "";

  constructor(
    public router:Router,
    private alertController:AlertController,
    private loadingController: LoadingController,
  ) { }

  ngOnInit() {
  }

  async registroDatosUsuario(){
    this.fechaNacimiento =  this.fechaNacimiento.split('T')[0];
    if(this.usuario == "" || this.usuario.length > 50){
      this.presentarMensaje("Error","Ingrese el usuario, máximo 50 caracteres");
    }else if(this.fechaNacimiento == "" || this.fechaNacimiento == "undefined"){
      this.presentarMensaje("Error","Ingrese la fecha de nacimiento");
    }else if(this.contrasena.length < 8 || this.contrasena.length > 16){
      this.presentarMensaje("Error","La contraseña debe tener entre 8 y 16 caracteres")
    }else if(this.contrasena != this.repitecontrasena){
      this.presentarMensaje("Error","Las contraseñas no coinciden");
    }else{

      let loading = await this.loadingController.create({
      message: "Registrando...",

      });
      loading.present();

      loading.dismiss();

    }
  }

  validarContrasena(){
    if(this.contrasena.length < 8 || this.contrasena.length > 16){
      this.mensajeContrasena = "La contraseña debe tener entre 8 y 16 caracteres";
    }else{
      this.mensajeContrasena = "";
      if(this.contrasena != this.repitecontrasena){
        this.mensajeContrasena = "Las contraseñas no coinciden";
      }else{
        this.mensajeContrasena = "";
      }
    }
  }
  volverRegistro(){
      this.router.navigate(['/login']);
    
  }

  async presentarMensaje(titulo:string,mensaje:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

}
