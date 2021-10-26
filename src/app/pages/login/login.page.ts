import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:string = '';
  clave:string = '';
  mensaje:string = '';
  
  constructor(
    public router:Router,
    private _servicioUsuario:UsuariosService,
    private loadingController: LoadingController,
    private alertController:AlertController,
    ) { 
      
    }

  ngOnInit() {

  }



  async iniciarSesion(){

    let iniciando = await this.loadingController.create({
      message: "Iniciando...",

    });
    this.mensaje = '';
    
    if(this.usuario == "" || this.usuario.length > 100){
      this.mensaje = "Ingrese el usuario";
      this.presentMensaje("Error",this.mensaje);
    }else if(this.clave == "" || this.clave.length > 16){
      this.mensaje = "Ingrese la contraseña";
      this.presentMensaje("Error",this.mensaje);
    }else{
      
      iniciando.present();
      this._servicioUsuario.loginUsuario(this.usuario,this.clave).subscribe(
        data=>{
          console.log(data)
          if(data['validar'] == true){
            
            localStorage.setItem('datosUsuario',JSON.stringify(data['arrayUsuario']));
            if(data['arrayAsignarTipoUsuario'].length == 1){
              localStorage.setItem('datosTipoUsuario',JSON.stringify(data['arrayAsignarTipoUsuario'][0]));
              if(data['arrayAsignarTipoUsuario'][0].identificador == 1){
                window.location.href = '/inicioestudiante';
              }else{
                window.location.href = '/iniciodocente';
              }              
            }else{
              localStorage.setItem('datosTipoUsuarioTemporal',JSON.stringify(data['arrayAsignarTipoUsuario']));
              window.location.href = '/logintipousuario';
            }
           
          }else{
            this.mensaje = data['mensaje'];
            this.presentMensaje("Error",this.mensaje);
            iniciando.dismiss();
          }
        
      },
      error=>{
     
        iniciando.dismiss();
        if(error.status == 0){
          this.mensaje = "No tienes conexión a internet";
        }else{
          this.mensaje = "Error interno de la App";
        }
        this.presentMensaje("Error",this.mensaje);
      }
      );
    }

   // this.router.navigate(['/inicioestudiante']);

  }

  async presentMensaje(titulo:string,mensaje:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

}
