import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresarhorarioPage } from './ingresarhorario.page';

const routes: Routes = [
  {
    path: '',
    component: IngresarhorarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresarhorarioPageRoutingModule {}
