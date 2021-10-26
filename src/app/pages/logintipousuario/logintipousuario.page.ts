import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-logintipousuario',
  templateUrl: './logintipousuario.page.html',
  styleUrls: ['./logintipousuario.page.scss'],
})
export class LogintipousuarioPage implements OnInit {

  arrayAsignarTipoUsuario:any = [];
  arrayDatos:any = [];
  objDatosUsuario: any;
  
  mensaje: string;
  idUsuario: any;
  constructor(
    public router:Router,
    private _servicioUsuario:UsuariosService,
    private loadingController: LoadingController,
    private alertController:AlertController,
  ) { }

  ngOnInit() {

    
    if(localStorage.getItem('datosTipoUsuarioTemporal')){
      this.arrayAsignarTipoUsuario = JSON.parse(localStorage.getItem('datosTipoUsuarioTemporal'));
      this.objDatosUsuario = JSON.parse(localStorage.getItem('datosUsuario'));
      this.idUsuario = this.objDatosUsuario.idUsuario;
    }else{
      this.cancelar();
    }    
  }

  cancelar(){
    localStorage.removeItem('datosUsuario');
    localStorage.removeItem('datosTipoUsuarioTemporal');
    window.location.href = '/login';
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

  async iniciarSesionTipoUsuario(idAsignarTipoUsuario:string){
    let iniciando = await this.loadingController.create({
      message: "Iniciando...",

    });
    this.mensaje = '';
    
    if(idAsignarTipoUsuario == ""){
      this.mensaje = "No se encuentra el índice del usuario";
      this.presentMensaje("Error",this.mensaje);
    }else{
      
      iniciando.present();
      this._servicioUsuario.loginTipoUsuario(this.idUsuario,idAsignarTipoUsuario).subscribe(
        data=>{
          if(data['validar'] == true){            
            localStorage.setItem('datosTipoUsuario',JSON.stringify(data['arrayAsignarTipoUsuario']));
            if(this.arrayAsignarTipoUsuario.length == 1){
              localStorage.removeItem('datosTipoUsuarioTemporal');
            }
            if(data['arrayAsignarTipoUsuario'].identificador == 1){
              window.location.href = '/inicioestudiante';
            }else{
              window.location.href = '/iniciodocente';
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
  }


}
