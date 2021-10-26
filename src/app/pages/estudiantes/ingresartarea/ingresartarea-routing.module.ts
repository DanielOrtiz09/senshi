import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresartareaPage } from './ingresartarea.page';

const routes: Routes = [
  {
    path: '',
    component: IngresartareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresartareaPageRoutingModule {}
