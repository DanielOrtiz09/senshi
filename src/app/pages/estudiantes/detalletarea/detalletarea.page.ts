import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { TareasService } from 'src/app/servicios/tareas.service';

@Component({
  selector: 'app-detalletarea',
  templateUrl: './detalletarea.page.html',
  styleUrls: ['./detalletarea.page.scss'],
})
export class DetalletareaPage implements OnInit {

  listaTareas:any[] = [];
  objTarea: any[];
  id: string;
  idAsignarTipoUsuario: any;
  mensaje: string;
  constructor(
    private route:ActivatedRoute,
    public router:Router,
    private _servicioTareas:TareasService,
    private loadingController: LoadingController,
    private alertController:AlertController,
  ) {
    
    this.route.params.subscribe(parameter => {
      this.id = parameter['id'];
    });
    
   }

   

 

  ngOnInit() {
    var listaTipoUsuario = JSON.parse(localStorage.getItem('datosTipoUsuario'));

    this.idAsignarTipoUsuario = listaTipoUsuario.idAsignarTipoUsuario;
    this.filtrarTarea();
  }

  async filtrarTarea(){
    let cargando = await this.loadingController.create({
      message: "Espera miesntras se carga el formulario...",
    });
    this.mensaje = '';
    
    if(this.idAsignarTipoUsuario == null || this.idAsignarTipoUsuario == ""){
      this.mensaje = "No se encuentra el índice del usuario";
      this.presentMensaje("Error",this.mensaje);
    }else{
      
      cargando.present();
      this._servicioTareas.filtrarTarea(this.idAsignarTipoUsuario,this.id).subscribe(
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
