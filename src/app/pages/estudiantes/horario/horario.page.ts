import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { HorariosService } from 'src/app/servicios/horarios.service';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {

  listaHorario:any[] = [];
  fechaActual:any = new Date().toLocaleString();
  mensaje: string;
  idAsignarTipoUsuario: string;

  constructor(
    public router:Router,
    private _servicioHorario:HorariosService,
    private loadingController: LoadingController,
    private alertController:AlertController,
    ) { 
      
    }



  ngOnInit() {
    
  }

  ionViewWillEnter() {
    var listaTipoUsuario = JSON.parse(localStorage.getItem('datosTipoUsuario'));
    console.log(listaTipoUsuario)
    this.idAsignarTipoUsuario = listaTipoUsuario.idAsignarTipoUsuario;
    this.cargarHorarioEstudiante();
  }

  async presentarMenuEliminarHorario(item:any){
    console.log(item)
   
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Confirmar!',
        message: 'Estás segur@ de eliminar <strong>'+item.nombreMateria+'</strong>!!!',
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
              this.eliminarHorario(item)
            }
          }
        ]
      });
  
      await alert.present();


  }
  async eliminarHorario(item:any){

    let cargando = await this.loadingController.create({
      message: "Eliminando...",

    });
    this.mensaje = '';
    
    if(this.idAsignarTipoUsuario == null || this.idAsignarTipoUsuario == ""){
      this.mensaje = "No se encuentra el índice del usuario";
      this.presentMensaje("Error",this.mensaje);
    }else if(item.id == null || item.id == ""){
      this.mensaje = "No se encuentra el índice del horario";
      this.presentMensaje("Error",this.mensaje);
    }else{
      
      cargando.present();
      this._servicioHorario.eliminarHorario(this.idAsignarTipoUsuario,item.id).subscribe(
        data=>{
          if(data['validar'] == true){
            this.cargarHorarioEstudiante();
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


  async cargarHorarioEstudiante(){

    let cargando = await this.loadingController.create({
      message: "Cargando...",

    });
    this.mensaje = '';
    
    if(this.idAsignarTipoUsuario == null || this.idAsignarTipoUsuario == ""){
      this.mensaje = "No se encuentra el índice del usuario";
      this.presentMensaje("Error",this.mensaje);
    }else{
      
      cargando.present();
      this._servicioHorario.cargarHorarioEstudiante(this.idAsignarTipoUsuario).subscribe(
        data=>{
          console.log(data)
          if(data['validar'] == true){
            this.listaHorario = data['arrayHorario'];
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
