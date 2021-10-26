import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { HorariosService } from 'src/app/servicios/horarios.service';

@Component({
  selector: 'app-ingresarhorario',
  templateUrl: './ingresarhorario.page.html',
  styleUrls: ['./ingresarhorario.page.scss'],
})
export class IngresarhorarioPage implements OnInit {
  idAsignarTipoUsuario: any;
  mensaje: string;
  listaDias: any[] = [];
  idDia:any;
  horaInicio:any = "07:00"
  horaFin:any = "09:00"
  nombreDocente: any;
  nombreMateria: any;

   constructor(
    public router:Router,
    private _servicioHorario:HorariosService,
    private loadingController: LoadingController,
    private alertController:AlertController,
    ) { 
      
    }



  ngOnInit() {
    var listaTipoUsuario = JSON.parse(localStorage.getItem('datosTipoUsuario'));

    this.idAsignarTipoUsuario = listaTipoUsuario.idAsignarTipoUsuario;
    this.cargarDias();
  }

  

  async guardarHorario(){
    let cargando = await this.loadingController.create({
      message: "Espera miesntras se carga el formulario...",
    });
    this.mensaje = '';
    
    if(this.idAsignarTipoUsuario == null || this.idAsignarTipoUsuario == ""){
      this.mensaje = "No se encuentra el índice del usuario";
      this.presentMensaje("Error",this.mensaje);
    }else if(this.idDia == null || this.idDia == ""){
      this.mensaje = "Seleccione un día";
      this.presentMensaje("Error",this.mensaje);
    }else if(this.nombreDocente == null || this.nombreDocente == "" || this.nombreDocente.length < 3){
      this.mensaje = "Ingresa el nombre del docente mínimo 3 caracteres";
      this.presentMensaje("Error",this.mensaje);
    }else if(this.nombreMateria == null || this.nombreMateria == "" || this.nombreMateria.length < 3){
      this.mensaje = "Ingresa el nombre de la materia mínimo 3 caracteres";
      this.presentMensaje("Error",this.mensaje);
    }else if(this.horaInicio == null || this.horaInicio == ""){
      this.mensaje = "Selecciona la hora inicio";
      this.presentMensaje("Error",this.mensaje);
    }else if(this.horaFin == null || this.horaFin == ""){
      this.mensaje = "Selecciona la hora fín";
      this.presentMensaje("Error",this.mensaje);
    }else{
      
      cargando.present();
      this._servicioHorario.guardarHorario(this.idAsignarTipoUsuario,this.idDia,this.nombreDocente,this.nombreMateria,this.horaInicio,this.horaFin).subscribe(
        data=>{
          console.log(data)
          if(data['validar'] == true){
            //this.presentMensaje("Correcto","Horario guardado exitosamente");
            this.idDia="";
            this.nombreDocente = "";
            this.nombreMateria = "";
            this.horaInicio = "07:00";
            this.horaFin = "09:00";
            this.router.navigate(['/horario']);
            
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
      this._servicioHorario.cargarDias(this.idAsignarTipoUsuario).subscribe(
        data=>{
          console.log(data)
          if(data['validar'] == true){
            this.listaDias = data['arrayDias'];
            
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
