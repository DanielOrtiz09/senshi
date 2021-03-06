import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { TareasService } from 'src/app/servicios/tareas.service';

@Component({
  selector: 'app-tareaspendientes',
  templateUrl: './tareaspendientes.page.html',
  styleUrls: ['./tareaspendientes.page.scss'],
})
export class TareaspendientesPage implements OnInit {

  listaTareas:any[] = [];
  mensaje: string;
  idAsignarTipoUsuario: any;
  constructor(
    public router:Router,
    private _servicioTareas:TareasService,
    private loadingController: LoadingController,
    private alertController:AlertController,
  ) { 
   
  }

  ngOnInit() {
    var listaTipoUsuario = JSON.parse(localStorage.getItem('datosTipoUsuario'));

    this.idAsignarTipoUsuario = listaTipoUsuario.idAsignarTipoUsuario;
    this.cargarTareas();
  }

  async presentarMenuEliminarTarea(item:any){
   
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Confirmar!',
        message: 'Estás segur@ de eliminar <strong>'+item.nombreTarea+'</strong>!!!',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
             
            }
          }, {
            text: 'Eliminar',
            handler: () => {
              this.eliminarTarea(item)
            }
          }
        ]
      });
  
      await alert.present();


  }
  async eliminarTarea(item:any){
    let cargando = await this.loadingController.create({
      message: "Espera mientras se elimina la tarea..",
    });
    this.mensaje = '';
    
    if(this.idAsignarTipoUsuario == null || this.idAsignarTipoUsuario == ""){
      this.mensaje = "No se encuentra el índice del usuario";
      this.presentMensaje("Error",this.mensaje);
    }else{
      
      cargando.present();
      this._servicioTareas.eliminarTarea(this.idAsignarTipoUsuario,item.id).subscribe(
        data=>{
          console.log(data)
          if(data['validar'] == false){            
            this.mensaje = data['mensaje'];
            this.presentMensaje("Error",this.mensaje);
          }else{
            this.cargarTareas();
          }
          cargando.dismiss();
      },
      error=>{
        cargando.dismiss();
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
  
  async cargarTareas(){
    let cargando = await this.loadingController.create({
      message: "Espera miesntras se carga el formulario...",
    });
    this.mensaje = '';
    
    if(this.idAsignarTipoUsuario == null || this.idAsignarTipoUsuario == ""){
      this.mensaje = "No se encuentra el índice del usuario";
      this.presentMensaje("Error",this.mensaje);
    }else{
      
      cargando.present();
      this._servicioTareas.cargarTareas(this.idAsignarTipoUsuario).subscribe(
        data=>{
          console.log(data)
          if(data['validar'] == true){
            this.listaTareas = data['arrayTareas'];
            console.log(this.listaTareas)
          }else{
            this.mensaje = data['mensaje'];
            this.presentMensaje("Error",this.mensaje);
          }
          cargando.dismiss();
      },
      error=>{
        cargando.dismiss();
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



  async presentMensaje(titulo:string,mensaje:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  cerrarSesion(){
    localStorage.removeItem('datosUsuario');
    localStorage.removeItem('datosTipoUsuario');
    localStorage.removeItem('datosTipoUsuarioTemporal');
    window.location.href = '/login';
  }

}
