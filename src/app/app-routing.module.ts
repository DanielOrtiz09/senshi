import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicioestudiante',
    loadChildren: () => import('./pages/estudiantes/inicioestudiante/inicioestudiante.module').then( m => m.InicioestudiantePageModule)
  },
  {
    path: 'sobresenshi',
    loadChildren: () => import('./pages/sobresenshi/sobresenshi.module').then( m => m.SobresenshiPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./pages/estudiantes/horario/horario.module').then( m => m.HorarioPageModule)
  },
  {
    path: 'tareaspendientes',
    loadChildren: () => import('./pages/estudiantes/tareaspendientes/tareaspendientes.module').then( m => m.TareaspendientesPageModule)
  },
  {
    path: 'detalletarea/:id',
    loadChildren: () => import('./pages/estudiantes/detalletarea/detalletarea.module').then( m => m.DetalletareaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
