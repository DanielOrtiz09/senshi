import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  constructor(private http:HttpClient) {
   

  }

  eliminarHorario(idAsignarTipoUsuario:string,idHorario:any){
    
    const data:any = {
      idAsignarTipoUsuario:idAsignarTipoUsuario,
      idHorario:idHorario,
    };

    return this.http.post(`${environment.urlApi}eliminarhorariomateria`,JSON.stringify(data),environment.options);
     
   }

  guardarHorario(idAsignarTipoUsuario:string,idDia:any,nombreDocente:any,nombreMateria:any,horaInicio:any,horaFin:any){
    
    const data:any = {
      idAsignarTipoUsuario:idAsignarTipoUsuario,
      idDia:idDia,
      nombreDocente:nombreDocente,
      nombreMateria:nombreMateria,
      horaInicio:horaInicio,
      horaFin:horaFin
    };

    return this.http.post(`${environment.urlApi}guardarhorario`,JSON.stringify(data),environment.options);
     
   }

  cargarDias(idAsignarTipoUsuario:string){
    
    const data:any = {
      idAsignarTipoUsuario:idAsignarTipoUsuario,
    };

    return this.http.post(`${environment.urlApi}cargardias`,JSON.stringify(data),environment.options);
     
   }

  cargarHorarioEstudiante(idAsignarTipoUsuario:string){
    
    const data:any = {
      idAsignarTipoUsuario:idAsignarTipoUsuario,
    };

    return this.http.post(`${environment.urlApi}cargarhorarioalumno`,JSON.stringify(data),environment.options);
     
   }
}
