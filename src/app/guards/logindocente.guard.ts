import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogindocenteGuard implements CanActivate {
  constructor(private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(localStorage.getItem('datosUsuario') == null){
      this.router.navigate(['/login']);
      return false;
    }else{
      if(localStorage.getItem('datosTipoUsuario') == null){
        this.router.navigate(['/logintipousuario']);
        return false;
      }else{
        var listaTipoUsuario = JSON.parse(localStorage.getItem('datosTipoUsuario'));
        if(listaTipoUsuario.identificador == 1){
          this.router.navigate(['/inicioestudiante']);
          return false;
        }else{
          return true;
        }
      }        
    }

  }
  
}
