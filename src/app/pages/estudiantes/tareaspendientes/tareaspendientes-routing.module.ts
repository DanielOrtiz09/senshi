import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TareaspendientesPage } from './tareaspendientes.page';

const routes: Routes = [
  {
    path: '',
    component: TareaspendientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TareaspendientesPageRoutingModule {}
