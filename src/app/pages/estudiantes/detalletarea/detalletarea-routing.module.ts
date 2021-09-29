import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalletareaPage } from './detalletarea.page';

const routes: Routes = [
  {
    path: '',
    component: DetalletareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalletareaPageRoutingModule {}
