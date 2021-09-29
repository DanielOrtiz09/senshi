import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioestudiantePage } from './inicioestudiante.page';

const routes: Routes = [
  {
    path: '',
    component: InicioestudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioestudiantePageRoutingModule {}
