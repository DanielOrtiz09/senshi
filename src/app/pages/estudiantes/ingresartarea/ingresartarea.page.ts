import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { TareasService } from 'src/app/servicios/tareas.service';

@Component({
  selector: 'app-ingresartarea',
  templateUrl: './ingresartarea.page.html',
  styleUrls: ['./ingresartarea.page.scss'],
})
export class IngresartareaPage implements OnInit {

  idAsignarTipoUsuario: any;
  mensaje: string;
  listaMaterias: any[] = [];
  idMateriaDocente:any;
  horaEntrega:any = "07:00";
  fechaEntrega:any = new Date().toISOString();
  detalleTarea: any;
  nombreTarea:any;

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
    this.cargarDias();
  }

  async guardarTarea(){
    let cargando = await this.loadingController.create({
      message: "Espera miesntras se gaurda la tarea...",
    });
    this.mensaje = '';

    var fechaEntregaGuardar = new Date(this.fechaEntrega).toISOString();
    console.log(fechaEntregaGuardar)
    console.log(this.horaEntrega)
    
    
    
    if(this.idAsignarTipoUsuario == null || this.idAsignarTipoUsuario == ""){
      this.mensaje = "No se encuentra el índice del usuario";
      this.presentMensaje("Error",this.mensaje);
    }else if(this.nombreTarea == null || this.nombreTarea == "" || this.nombreTarea.length < 3){
      this.mensaje = "Ingresa el nombre/etiqueta de la tarea mínimo 3 caracteres";
      this.presentMensaje("Error",this.mensaje);
    }else  if(this.idMateriaDocente == null || this.idMateriaDocente == ""){
      this.mensaje = "Selecciona una materia";
      this.presentMensaje("Error",this.mensaje);
    }else if(this.fechaEntrega == null || this.fechaEntrega == ""){
      this.mensaje = "Selecciona la fecha de entrega";
      this.presentMensaje("Error",this.mensaje);
    }else if(this.horaEntrega == null || this.horaEntrega == ""){
      this.mensaje = "Selecciona la hora de entrega";
      this.presentMensaje("Error",this.mensaje);
    }else if(this.detalleTarea == null || this.detalleTarea == "" || this.detalleTarea.length < 10){
      this.mensaje = "Ingresa el detalle de la tarea mínimo 10 caracteres";
      this.presentMensaje("Error",this.mensaje);
    }else{
      
      
      cargando.present();
      this._servicioTareas.guardarTarea(this.idAsignarTipoUsuario,this.nombreTarea,this.idMateriaDocente,fechaEntregaGuardar,this.horaEntrega,this.detalleTarea).subscribe(
        data=>{
          console.log(data)
          if(data['validar'] == true){
            window.location.href = "/tareaspendientes";
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


  async cargarDias(){
    let cargando = await this.loadingController.create({
      message: "Espera miesntras se carga el formulario...",
    });
    this.mensaje = '';
    
    if(this.idAsignarTipoUsuario == null || this.idAsignarTipoUsuario == ""){
      this.mensaje = "No se encuentra el índice del usuario";
      this.presentMensaje("Error",this.mensaje);
    }else{
      
      cargando.present();
      this._servicioTareas.cargarMaterias(this.idAsignarTipoUsuario).subscribe(
        data=>{
          console.log(data)
          if(data['validar'] == true){
            this.listaMaterias = data['arrayMateriaDocentes'];
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
}
