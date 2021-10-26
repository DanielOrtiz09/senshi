import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LogindocenteGuard } from './guards/logindocente.guard';
import { LoginestdianteGuard } from './guards/loginestdiante.guard';
import { LogintipousuarioGuard } from './guards/logintipousuario.guard';
import { LogoutGuard } from './guards/logout.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate:[LogoutGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate:[LogoutGuard]
  },
  {
    path: 'inicioestudiante',
    loadChildren: () => import('./pages/estudiantes/inicioestudiante/inicioestudiante.module').then( m => m.InicioestudiantePageModule),
    canActivate:[LoginestdianteGuard]
  },
  {
    path: 'sobresenshi',
    loadChildren: () => import('./pages/sobresenshi/sobresenshi.module').then( m => m.SobresenshiPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./pages/estudiantes/horario/horario.module').then( m => m.HorarioPageModule),
    canActivate:[LoginestdianteGuard]
  },
  {
    path: 'tareaspendientes',
    loadChildren: () => import('./pages/estudiantes/tareaspendientes/tareaspendientes.module').then( m => m.TareaspendientesPageModule),
    canActivate:[LoginestdianteGuard]
  },
  {
    path: 'detalletarea/:id',
    loadChildren: () => import('./pages/estudiantes/detalletarea/detalletarea.module').then( m => m.DetalletareaPageModule),
    canActivate:[LoginestdianteGuard]
  },
  {
    path: 'logintipousuario',
    loadChildren: () => import('./pages/logintipousuario/logintipousuario.module').then( m => m.LogintipousuarioPageModule),
    canActivate:[LogintipousuarioGuard]
  },
  {
    path: 'iniciodocente',
    loadChildren: () => import('./pages/docentes/iniciodocente/iniciodocente.module').then( m => m.IniciodocentePageModule),
    canActivate:[LogindocenteGuard]
  },
  {
    path: 'ingresarhorario',
    loadChildren: () => import('./pages/estudiantes/ingresarhorario/ingresarhorario.module').then( m => m.IngresarhorarioPageModule)
  },
  {
    path: 'ingresartarea',
    loadChildren: () => import('./pages/estudiantes/ingresartarea/ingresartarea.module').then( m => m.IngresartareaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
