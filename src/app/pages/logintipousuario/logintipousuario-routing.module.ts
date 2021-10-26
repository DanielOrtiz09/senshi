import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogintipousuarioPage } from './logintipousuario.page';

const routes: Routes = [
  {
    path: '',
    component: LogintipousuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogintipousuarioPageRoutingModule {}
