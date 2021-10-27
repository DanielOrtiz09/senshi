import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) {
   

  }
  registrarUsuario(usuario:string,clave: string,fechaNacimiento:any){
    
    const data:any = {
      usuario:usuario,
      clave:clave,
      fechaNacimiento:fechaNacimiento
    };

    return this.http.post(`${environment.urlApi}registrarusuario`,JSON.stringify(data),environment.options);
     
   }
   loginUsuario(usuario:string,clave: string){
    
    const data:any = {
      usuario:usuario,
      clave:clave,
    };

    return this.http.post(`${environment.urlApi}login`,JSON.stringify(data),environment.options);
     
   }

   loginTipoUsuario(idUsuario:string,idAsignarTipoUsuario: string){
    const data:any = {
      idUsuario:idUsuario,
      idAsignarTipoUsuario:idAsignarTipoUsuario,
    };
    return this.http.post(`${environment.urlApi}logintipousuario`,JSON.stringify(data),environment.options);
   }
   
}
