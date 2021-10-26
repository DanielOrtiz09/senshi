import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  
  constructor(private http:HttpClient) {
   

  }
  eliminarTarea(idAsignarTipoUsuario:string,idTarea:string){
    
    const data:any = {
      idAsignarTipoUsuario:idAsignarTipoUsuario,
      idTarea:idTarea
    };

    return this.http.post(`${environment.urlApi}eliminartarea`,JSON.stringify(data),environment.options);
     
  }

  filtrarTarea(idAsignarTipoUsuario:string,idTarea:string){
    
    const data:any = {
      idAsignarTipoUsuario:idAsignarTipoUsuario,
      idTarea:idTarea
    };

    return this.http.post(`${environment.urlApi}filtrartarea`,JSON.stringify(data),environment.options);
     
   }
  cargarTareas(idAsignarTipoUsuario:string){
    
    const data:any = {
      idAsignarTipoUsuario:idAsignarTipoUsuario,
    };

    return this.http.post(`${environment.urlApi}cargartareas`,JSON.stringify(data),environment.options);
     
   }
  guardarTarea(idAsignarTipoUsuario:string,nombreTarea:string,idMateriaDocente:string,fechaEntrega:any,horaEntrega:any,detalleTarea:string){
    
    const data:any = {
      idAsignarTipoUsuario:idAsignarTipoUsuario,
      nombreTarea:nombreTarea,
      idMateriaDocente:idMateriaDocente,
      fechaEntrega:fechaEntrega,
      horaEntrega:horaEntrega,
      detalleTarea:detalleTarea
    };

    return this.http.post(`${environment.urlApi}guardartarea`,JSON.stringify(data),environment.options);
     
  }

  cargarMaterias(idAsignarTipoUsuario:string){
    
    const data:any = {
      idAsignarTipoUsuario:idAsignarTipoUsuario,
    };

    return this.http.post(`${environment.urlApi}cargarmaterias`,JSON.stringify(data),environment.options);
     
   }
}
